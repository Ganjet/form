import { Injectable } from '@angular/core';
import { BackEndService } from "./back-end.service"
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable()
export class LoginService {

  constructor(private backEnd:BackEndService) { }
  login(jsonForm): void {
    this.backEnd.login(jsonForm).toPromise().then(response=>{
      localStorage.setItem("userIsLogged","true");
    })
  }
}
