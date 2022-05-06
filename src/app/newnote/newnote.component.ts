import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/note';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewnoteComponent implements OnInit {

  constructor(){}

  //input many array to then add? or perhaps connect 
  // @Input() manyNotesArr: Note[]
  @Input() handlePost: (newNote: Note) => void;

  newNote: Note = new Note();
  error?: string;

  ngOnInit(): void {
  }

  addNote(){
    if(this.newNote.text == '' || this.newNote.title == '' || this.newNote.text == undefined || this.newNote.title == undefined){
      this.error = "fields cannot be blank";
      throw new Error("Fields Cannot Be Blank!");
    } else {
      this.error = undefined;
      console.log(this.newNote)
      //call passed method from parent
      this.handlePost(this.newNote);
      // this.newNote.title="";
      // this.newNote.text="";
    }
  }

}
