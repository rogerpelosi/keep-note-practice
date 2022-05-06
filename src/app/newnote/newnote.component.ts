import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/note';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewnoteComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder){}

  @Output() handlePost: EventEmitter<Note> = new EventEmitter<Note>();

  newNote: Note = new Note();
  titleError?: string;
  textError?: string;

  newNoteForm: FormGroup = this.formBuilder.group({
    title: this.formBuilder.control('', [Validators.required, Validators.maxLength(20)]),
    text: this.formBuilder.control('', [Validators.required])
  })

  ngOnInit(): void {
    this.newNoteForm.valueChanges.subscribe({
      next:()=>{
        console.log(this.newNoteForm)

        if(this.newNoteForm.pristine){
          this.textError=undefined;
          this.titleError=undefined;
        } else {

        let title = this.newNoteForm.controls['title'];
        let text = this.newNoteForm.controls['text'];

        let titleError = 'title must be 1-20 characters';
        let textError = 'text must be at least one character';

        if(title.valid && text.untouched)
        {
          this.titleError = undefined
        } 
        else if(title.invalid && text.untouched)
        {
          this.titleError = titleError
        }
        else if(title.invalid && text.valid)
        {
          this.titleError = titleError;
          this.textError = undefined;
        }
        else if(title.valid && text.valid)
        {
          this.titleError = undefined;
          this.textError = undefined;
        }
        else if(title.valid && (text.invalid && text.touched))
        {
          this.titleError = undefined;
          this.textError = textError;
        }
        else if((title.invalid && title.touched) && (text.invalid && text.touched))
        {
          this.titleError = titleError;
          this.textError = textError;
        }
      }

        // if(this.newNoteForm.pristine)

        // if(this.newNoteForm.controls['title'].errors !== null){
        //   this.titleError = 'title must be between 1 and 20 character(s)';
        // } else {
        //   this.titleError= undefined;}

        // if(this.newNoteForm.controls['text'].errors !== null){
        //   this.textError = 'text must be at least 1 character';
        // } else {
        //   this.textError=undefined}
      }
    })
  }

  formSubmission(){
    this.newNote.text = this.newNoteForm.value['text'];
    this.newNote.title = this.newNoteForm.value['title'];
    this.handlePost.emit(this.newNote);
    this.newNoteForm.reset();
  }

}
