import { Injectable } from '@angular/core';
import { CanvasWhiteboardOptions } from './canvas_whiteboard_options';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SettingsService {

  private settingsUrl = 'http://comp586.app/api/settings';  // Todo: fix this, URL to web api

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET settings. */
  getSettings(): Observable<CanvasWhiteboardOptions> {
    return this.http.get<CanvasWhiteboardOptions>(this.settingsUrl).pipe(
      tap(settings => this.log(`fetched settings, ${this.settingsUrl}`)),
      catchError(this.handleError<CanvasWhiteboardOptions>(`getSettings`))
    );
  }

  /** PUT: update the setting on the server */
  updateSettings (setting: CanvasWhiteboardOptions): Observable<any> {
    return this.http.put(this.settingsUrl, setting, httpOptions).pipe(
      tap(_ => this.log(`updated settings, ${this.settingsUrl}`)),
      catchError(this.handleError<any>('updateSettings'))
    );
  }

  // /* GET settings whose name contains search term */
  // searchHeroes(term: string): Observable<CanvasWhiteboardOptions[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty setting array.
  //     return of([]);
  //   }
  //   return this.http.get<CanvasWhiteboardOptions[]>(this.settingsUrl).pipe(
  //     tap(_ => this.log(`found settings matching "${term}", ${this.settingsUrl}`)),
  //     catchError(this.handleError<CanvasWhiteboardOptions[]>('searchHeroes', []))
  //   );
  // }

  /** Log a SettingsService message with the MessageService */
  private log(message: string) {
    this.messageService.add('SettingsService: ' + message);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
