import {Injectable} from '@angular/core';
import { Subject } from 'rxjs'
import { Observable } from 'rxjs'
import {NoteItem} from '../../models/interfaces'

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {

  /* just in case we would like to get newNote
  from Observable, but for now we will not use it
  */

  onNewNote = new Subject<NoteItem>();

  getOnNewNote (): Observable<NoteItem> {
    return this.onNewNote.asObservable();
  }

  constructor() {

  }
}
