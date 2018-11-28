import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NotesDataService} from '../../shared/services/notes-data-service/notes-data.service';
import {NoteItem} from '../../shared/models/interfaces';
import {ModalPopupNotesComponent} from '../modal-popup-notes/modal-popup-notes.component';
import {AddNewNoteComponent} from '../add-new-note/add-new-note.component';

@Component({
  selector: 'app-notes-board',
  templateUrl: './notes-board.component.html',
  styleUrls: ['./notes-board.component.scss']
})
export class NotesBoardComponent implements OnInit, OnDestroy {

  notesChanges: any;
  notesList: NoteItem[] = [];

  constructor(public dialog: MatDialog,
              private notesDataService: NotesDataService) {
    this.notesChanges = notesDataService.getOnNewNote().subscribe((newNote: NoteItem) => {
      this.notesList.push(newNote);
    });
  }

  openExistingNote(noteItem: NoteItem): void {
    const dialogRef = this.dialog.open(ModalPopupNotesComponent, {
      width: '350px',
      data: {
        content: noteItem.content
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openNewNotePopUp(): void {
    const dialogRef = this.dialog.open(AddNewNoteComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Add new note: ', result);
      this.notesList.push(result);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.notesChanges.unsubscribe();
  }

}
