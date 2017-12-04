import { Component, OnInit, Input } from '@angular/core';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { CanvasWhiteboardOptions } from '../canvas_whiteboard_options';

import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-whiteboard',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {

  // @Input() canvasOptions: CanvasWhiteboardOptions;
  @Input() canvasOptions: CanvasWhiteboardOptions = {
    // imageUrl: string,
    aspectRatio: .5,
    drawButtonEnabled: true,
    drawButtonClass: "drawButtonClass",
    drawButtonText: "Draw",
    clearButtonEnabled: true,
    clearButtonClass: "clearButtonClass",
    clearButtonText: "Clear",
    undoButtonText: "Undo",
    undoButtonEnabled: true,
    redoButtonText: "Redo",
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: "Save",
    lineWidth: 10,
    strokeColor: "rgb(0,0,0)",
    shouldDownloadDrawing: true
  };

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.getSettings();
  }

  getSettings(): void {
    this.settingsService.getSettings()
      .subscribe(canvasOptions => this.canvasOptions = canvasOptions);
  }

  save(): void {
    this.settingsService.updateSettings(this.canvasOptions)
      .subscribe(() => this.getSettings());
  }
}
