import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NoteItem} from '../../shared/models/interfaces';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.scss']
})
export class AddNewNoteComponent implements OnInit {

  note: NoteItem = {
    author: '',
    content: '',
    date: ''
  };
  newNoteForm: any;

  get author() {
    return this.newNoteForm.get('author');
  }

  get content() {
    return this.newNoteForm.get('content');
  }

  constructor(public dialogRef: MatDialogRef<AddNewNoteComponent>) {
  }

  ngOnInit() {
    this.newNoteForm = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.maxLength(200000)
      ])
    });
  }

  onSubmit() {
    if (!this.newNoteForm.valid) {
      return;
    }
    const noteItem = {
      author: this.author.value,
      content: this.content.value,
      date: new Date().toDateString()
    };
    this.dialogRef.close(noteItem);

  }

  onClickClose(save = false): void {
    this.dialogRef.close();
  }

}
