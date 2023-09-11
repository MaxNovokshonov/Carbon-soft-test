import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {NoteComponent} from './components/side-bar/note/note.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NoteContentComponent} from './components/note-content/note-content.component';
import {AddNoteModalComponent} from './components/add-note-modal/add-note-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    NoteComponent,
    NotFoundComponent,
    NoteContentComponent,
    AddNoteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
