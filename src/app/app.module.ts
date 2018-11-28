import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotesBoardComponent} from './components/notes-board/notes-board.component';
import {NotesDataService} from './shared/services/notes-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotesDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
