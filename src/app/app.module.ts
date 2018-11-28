import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotesDataService} from './shared/services/notes-data-service/notes-data.service';
import {CustomMaterialModule} from './shared/services/material/material.module';
import {NotesBoardComponent} from './components/notes-board/notes-board.component';
import {ModalPopupNotesComponent} from './components/modal-popup-notes/modal-popup-notes.component';
import {AddNewNoteComponent} from './components/add-new-note/add-new-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesBoardComponent,
    ModalPopupNotesComponent,
    AddNewNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [NotesDataService],
  entryComponents: [ModalPopupNotesComponent, AddNewNoteComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
