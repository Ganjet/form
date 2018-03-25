import { Component, OnInit } from '@angular/core';
import { BackEndService } from "../back-end.service"
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectObject:Object;
  constructor(private backEndService:BackEndService) { }

  ngOnInit() {
    this.backEndService.getSubject().subscribe(value => {
      console.log("su" + value);
      this.subjectObject=value;
    }, error => {
      console.log("error" + error);
    })
  }

}
