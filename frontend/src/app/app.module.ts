import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

import { MessageService } from './message.service';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    WhiteboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CanvasWhiteboardModule,
  ],
  providers: [
    MessageService,
    SettingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
