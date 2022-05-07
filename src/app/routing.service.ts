import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/note';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private router: Router){}

  gotoLogin(){
    this.router.navigate(['login']);
  }

  gotoHome(){
    this.router.navigate(['main']);
  }

  gotoCards(){
    this.router.navigate(['main', 'view', 'cards'])
  }

  gotoList(){
    this.router.navigate(['main', 'view', 'list'])
  }

  gotoClickedCardFromCards(noteId: number){
    this.router.navigate(['main', {outlets: {clickedCardOutlet: ['viewnote', noteId]}}])
  }

}
