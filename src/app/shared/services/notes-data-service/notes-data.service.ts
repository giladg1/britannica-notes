import {Injectable} from '@angular/core';
import { Subject } from 'rxjs'
import { Observable } from 'rxjs'
import {NoteItem} from '../../models/interfaces'

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {

  onNewNote = new Subject<NoteItem>();

  getOnNewNote (): Observable<NoteItem> {
    return this.onNewNote.asObservable();
  }

  constructor() {

  }
}
