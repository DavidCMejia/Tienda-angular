import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser()
    .pipe(
      map(user => user=== null ? false : true), //esta diciendo que si No esta logeado/null entonces NO sigue, solo sigue si se logea
      //queda PROHIBIDO sin logearse con FALSE
      tap(hasUser=>{
        if (!hasUser){
          this.router.navigate(['/login']); //si NO hay logeo e intenta ir a ADMIN se va para Login
        }
      }),
    );

    }

  }

