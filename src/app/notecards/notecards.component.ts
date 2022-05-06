import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notecards',
  templateUrl: './notecards.component.html',
  styleUrls: ['./notecards.component.css']
})
export class NotecardsComponent implements OnInit {

  constructor(
    private noteService: NoteService){}

  manyNotesArr: Note[] = [];
  note: Note;

  ngOnInit():void{
    this.noteService.gatherNotes().subscribe({
      next:(notes=>{
        this.manyNotesArr=notes.reverse();
      }),
      error:(error=>console.log(error))
    })
  }

  addNotePersist(newNote: Note){
      this.noteService.postNewNote(newNote).subscribe({
        next:newNoteObj=>{
          this.manyNotesArr.unshift(newNoteObj);
        },
        error:error=>console.log(error)
      });
  }

}
