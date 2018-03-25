import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HttpModule,ResponseOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BackEndService } from './back-end.service';
import { LoginService } from './login.service';
import { SubjectComponent } from './subject/subject.component'
import { Cookie } from 'ng2-cookies/ng2-cookies';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SubjectComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

  ],
  providers: [BackEndService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
