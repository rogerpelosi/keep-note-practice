import { Component, OnInit } from '@angular/core';

import { Note } from 'src/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent implements OnInit {

  constructor(
    private noteService: NoteService){}

  manyNotesArr: Note[] = [];
  note: Note;

  ngOnInit(): void {
    this.noteService.gatherNotes().subscribe({
      next:(notes=>this.manyNotesArr=notes),
      error:(error=>console.log(error))
    })
  }

  addNotePersist(newNote: Note){
      this.noteService.postNewNote(newNote).subscribe({
        next:newNoteObj=>{
          this.manyNotesArr.push(newNoteObj);
        },
        error:error=>console.log(error)
      });
  }

}
