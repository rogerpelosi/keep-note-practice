import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

}
