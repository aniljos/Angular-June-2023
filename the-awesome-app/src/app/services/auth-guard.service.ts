import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token-service';


//Injectable: If the service has to be injcetd with other services then @Injectbale is required.
//providedIn: 'root':   Configure the provided automatically in the root module(AppModule), ensure a single instance


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    
      const isAuth= this.tokenService.isAuthenticated();
      debugger;
      if(isAuth){
        return true;
      }
      else{

        this.router.navigate(["/login"]);
        return false;

      }
  }
}
