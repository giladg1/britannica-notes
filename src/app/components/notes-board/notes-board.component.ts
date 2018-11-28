import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NoteItem} from '../../shared/models/interfaces';
import {ModalPopupNotesComponent} from '../modal-popup-notes/modal-popup-notes.component';
import {AddNewNoteComponent} from '../add-new-note/add-new-note.component';

@Component({
  selector: 'app-notes-board',
  templateUrl: './notes-board.component.html',
  styleUrls: ['./notes-board.component.scss']
})
export class NotesBoardComponent implements OnInit {

  notesList: NoteItem[] = [];

  constructor(public dialog: MatDialog) {
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
      if (result.hasOwnProperty('author') && result.hasOwnProperty('content')) {
        this.notesList.push(result);
      }
    });
  }

  ngOnInit() {
  }

}
