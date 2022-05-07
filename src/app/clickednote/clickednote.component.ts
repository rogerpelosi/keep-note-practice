import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clickednote',
  templateUrl: './clickednote.component.html',
  styleUrls: ['./clickednote.component.css']
})
export class ClickednoteComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:id=>{
        this.noteId=id['noteId']
      console.log(id)}
    })
  }

  noteId: number;

}
