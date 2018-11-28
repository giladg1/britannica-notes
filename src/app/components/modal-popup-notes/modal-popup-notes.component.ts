import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NoteItem} from '../../shared/models/interfaces';

@Component({
  selector: 'app-modal-popup-notes',
  templateUrl: './modal-popup-notes.component.html',
  styleUrls: ['./modal-popup-notes.component.scss']
})
export class ModalPopupNotesComponent implements OnInit {

  note: NoteItem = {
    author: '',
    content: '',
    date: ''
  };

  constructor(
    public dialogRef: MatDialogRef<ModalPopupNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NoteItem) {
    this.note.author = data.author;
    this.note.content = data.content;
    this.note.date = data.date;
  }

  ngOnInit() {
  }

  onClickClose(): void {
    this.dialogRef.close();
  }

}
