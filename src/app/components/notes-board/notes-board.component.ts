import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NotesDataService} from '../../shared/services/notes-data-service/notes-data.service';
import {NoteItem} from '../../shared/models/interfaces';
import {ModalPopupNotesComponent} from '../modal-popup-notes/modal-popup-notes.component';

@Component({
  selector: 'app-notes-board',
  templateUrl: './notes-board.component.html',
  styleUrls: ['./notes-board.component.scss']
})
export class NotesBoardComponent implements OnInit, OnDestroy {

  notesChanges: any;
  notesList: NoteItem[] = [
    {
      author: 'gilad',
      content: 'Cascading Style Sheets (CSS) is a style' +
        'sheet language used for describing the presentation of a document written in a markup language like HTML.' +
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.' +
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.' +
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
      date: '2018'
    }
    ];

  constructor(public dialog: MatDialog,
              notesDataService: NotesDataService) {
    this.notesChanges = notesDataService.getOnNewNote().subscribe((newNote: NoteItem) => {
      this.notesList.push(newNote);
    });
  }

  openExistingNote(noteItem: NoteItem): void {
    const dialogRef = this.dialog.open(ModalPopupNotesComponent, {
      width: '350px',
      data: {
        author: noteItem.author,
        content: noteItem.content,
        date: noteItem.date
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.notesChanges.unsubscribe();
  }

}
