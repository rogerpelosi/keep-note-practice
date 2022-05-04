import { Component, OnInit } from '@angular/core';

import { Note } from 'src/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private noteService: NoteService) {}

  manyNotesArr: Note[] = [];
  newNote: Note = new Note();
  error?: string;

  ngOnInit(): void {
    this.noteService.gatherNotes().subscribe({
      next:(notes=>this.manyNotesArr=notes),
      error:(error=>console.log(error))
    })
  }

  addNote(){
    if(this.newNote.title === undefined || this.newNote.text === undefined || this.newNote.title === ""){
      this.error = "fields cannot be blank";
      throw new Error("Fields Cannot Be Blank!");
    } else {
      this.error = undefined;
      this.noteService.postNewNote(this.newNote).subscribe({
        next:newNoteObj=>{
          this.manyNotesArr.push(newNoteObj);
          this.newNote.title="";
          this.newNote.text="";
        },
        error:error=>this.error = error
      });
    }
  }


}
