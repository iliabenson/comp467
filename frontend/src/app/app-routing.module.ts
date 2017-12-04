import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/whiteboard', pathMatch: 'full' },
  { path: 'whiteboard', component: WhiteboardComponent },
  { path: '**', redirectTo: '/whiteboard' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
