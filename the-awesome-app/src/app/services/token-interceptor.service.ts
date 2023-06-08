import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token-service';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const productsUrl = environment.productsUrl;
    const accessToken = this.tokenService.getAccessToken();
    if(accessToken && request.url.startsWith(productsUrl)){
      //debugger;
      
      return next.handle(request.clone({setHeaders: {"Authorization" : `Bearer ${accessToken}`}}))

    }


    return next.handle(request);
  }
}
