import { Component, OnInit, Input, Output } from '@angular/core';
import { Note } from 'src/note';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {

  constructor(
    private routeService: RoutingService){}

  @Input() singleNote:Note

  ngOnInit(): void {
  }

  clickNote(){
    console.log('clickNote() in NotecardComponent');
    this.routeService.gotoClickedCardFromCards(this.singleNote.id);
  }

}
