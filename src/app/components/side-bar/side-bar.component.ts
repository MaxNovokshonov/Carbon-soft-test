import {Component, OnInit} from '@angular/core';
import {mockNotes} from '../../mock-notes';
import {Notes} from '../../interfaces/notes';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  notes: Notes[] = mockNotes;

  constructor() {
  }

  ngOnInit(): void {
  }

}
