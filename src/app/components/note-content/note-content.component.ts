import {Component, OnInit} from '@angular/core';
import {Notes} from '../../interfaces/notes';
import {ActivatedRoute, Params} from '@angular/router';
import {NotesService} from '../../services/notes.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss']
})
export class NoteContentComponent implements OnInit {

  note$: Observable<Notes>;

  constructor(private route: ActivatedRoute, private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.note$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.notesService.getNoteById(params.id);
      }),
    );
  }

}
