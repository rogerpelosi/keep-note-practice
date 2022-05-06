import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenauthService } from './tokenauth.service';

@Injectable({
  providedIn: 'root'
})
export class CandisplayGuard implements CanActivate {

  constructor(
    private tokenauth: TokenauthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      console.log('CandisplayGuard created');
    
      let token = this.tokenauth.getToken();

      return this.tokenauth.authenticateToken(token).pipe(map((res:any)=>{
        console.log(res);
        return res['isAuthenticated'];
      }))
  }
  
}
