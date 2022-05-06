import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/note';

@Component({
  selector: 'app-notelistli',
  templateUrl: './notelistli.component.html',
  styleUrls: ['./notelistli.component.css']
})
export class NotelistliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() singleNote: Note;

}
