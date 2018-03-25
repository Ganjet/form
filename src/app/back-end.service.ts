import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
const URL="http://vps9615.hyperhost.name:443/api";
@Injectable()
export class BackEndService  {
  
  constructor(private http: HttpClient) { }

  login(jsonForm: String): Observable<any> {
    return this.http.post(URL+"/login/index", jsonForm,{ withCredentials: true});
  }

  getSubject():Observable<any>{
    return this.http.get(URL+"/Subject/getRecords",{ withCredentials:true})
  }
}
