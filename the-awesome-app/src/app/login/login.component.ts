import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../services/token-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers: []
})
export class LoginComponent {

  public loginFormGroup: FormGroup;
  public message: string ="";

  constructor(private httpClient: HttpClient, private router: Router, private tokenService: TokenService){

    this.loginFormGroup = new FormGroup({
      userName: new FormControl("", [Validators.required], []),
      pwd: new FormControl("", [Validators.required], [])
    });
  }

  login(){

    if(this.loginFormGroup.valid){
      
      this.message = "";
      const userName = this.loginFormGroup.get("userName")?.value;
      const password = this.loginFormGroup.get("pwd")?.value;
      const url = "http://localhost:9000/login";
      this.httpClient.post<{accessToken: string}>(url, {name: userName, password: password})
                        .subscribe({
                          next: (data) => {

                            this.message = "";
                            this.tokenService.setAuthenticated(true);
                            this.tokenService.setAccessToken(data.accessToken)
                            this.router.navigate(["/products"]);
                          },
                          error: () => {

                            this.message = "Invalid Credentials";
                            this.tokenService.setAuthenticated(false);
                            this.tokenService.setAccessToken("")
                          }
                        })
    }
    else{
      this.message = "Please provide the details";
    }

    

  }
}
