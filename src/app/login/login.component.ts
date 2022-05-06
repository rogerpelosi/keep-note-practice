import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';
import { TokenauthService } from '../tokenauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private tokenauth: TokenauthService,
    private routing: RoutingService){}

  username:string = '';
  password:string= '';

  // user = {username: this.username, password: this.password};

  loginError?:string = '';

  ngOnInit():void{}

  login(){
    
    if(this.username == '' || this.username == undefined || this.password == '' || this.password == undefined){
      this.loginError = "fields cannot be blank!"
    } else {   
      let user = {username: this.username, password: this.password}; 
      this.tokenauth.authenticateUser(user).subscribe({
      next:res=>{
        console.log(res);
        this.tokenauth.setToken(res['token']);
        this.routing.gotoHome();
      },
      error:err=>{
        this.loginError = err['error']['message'];
        console.log(err['error']['message'])
      }
    })}

  }

}
