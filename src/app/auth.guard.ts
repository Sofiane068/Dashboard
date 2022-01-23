import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './service/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
   constructor(private monServiceAuth: AuthServiceService){

   }

  canActivate(): boolean {
    return this.monServiceAuth.estConnecte;
  }
}
