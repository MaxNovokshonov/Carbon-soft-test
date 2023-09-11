import {Injectable} from '@angular/core';
import {mockNotes} from '../mock-notes';
import {Notes} from '../interfaces/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Notes[] = mockNotes;

  constructor() {
  }

  getAllNotes() {
    return this.notes;
  }

  getNoteById(id: number) {
    return this.notes.filter((note) => note.id == id);
  }
}
