import {Component, OnInit} from '@angular/core';
import {Notes} from '../../interfaces/notes';
import {NotesService} from '../../services/notes.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isModalOpen = false;
  notes: Notes[];

  constructor(private notesService: NotesService) {
    this.notes = this.notesService.getAllNotes();
  }

  ngOnInit(): void {
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addNote(note: Notes) {
    this.notes.push(note);
  }
}
