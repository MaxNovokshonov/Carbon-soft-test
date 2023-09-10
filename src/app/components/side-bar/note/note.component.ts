import {Component, Input, OnInit} from '@angular/core';
import {Notes} from '../../../interfaces/notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Notes;

  constructor() {
  }

  ngOnInit(): void {
  }

}
