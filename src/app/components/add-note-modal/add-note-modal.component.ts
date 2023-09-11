import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Notes} from '../../interfaces/notes';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.scss']
})
export class AddNoteModalComponent {

  @Output() closeModalEvent = new EventEmitter();
  @Output() addNoteEvent = new EventEmitter<Notes>();
  @Input() nextID: number;

  addNoteForm: FormGroup;

  constructor() {
    this.addNoteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
    });
  }

  get title(): FormControl {
    return this.addNoteForm.get('title') as FormControl;
  }

  get text(): FormControl {
    return this.addNoteForm.get('text') as FormControl;
  }

  closeModal(event: any) {
    this.closeModalEvent.emit(event);
  }

  addNote(event: Notes) {
    this.addNoteEvent.emit(event);
  }

  submit() {
    if (this.addNoteForm.invalid) {
      return;
    }

    this.addNote({
      id: this.nextID + 1,
      title: this.title.value,
      text: this.text.value
    });
    this.closeModal(Event);
  }
}
