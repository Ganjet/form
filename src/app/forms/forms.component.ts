import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackEndService } from "../back-end.service"
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formValue: any;
  userIsLogged:Boolean;
  

  constructor(
    private http: HttpClient,
    private backEndService: BackEndService,
    private loginServise:LoginService  
  ) { }

  ngOnInit() {
    this.userIsLogged=!!localStorage.getItem("userIsLogged");
  }
  onsubmit(val: any) {
    this.formValue = val;
    let jsonForm = JSON.stringify(this.formValue)
    console.log(jsonForm);

    this.loginServise.login(jsonForm);
    this.userIsLogged=!!localStorage.getItem("userIsLogged");
  }
}

