import { Component, OnInit, Input, Output } from '@angular/core';
import { Note } from 'src/note';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {

  constructor() {}

  @Input() singleNote:Note

  ngOnInit(): void {
  }

}
