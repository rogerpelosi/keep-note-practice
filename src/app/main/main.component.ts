import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private routing: RoutingService){}

  ngOnInit():void{}

  showCards(){
    this.routing.gotoCards();
  }

  showList(){
    this.routing.gotoList();
  }

  // showCard(){
  //   this.routing.gotoClickedCardFromCards();
  // }

}
