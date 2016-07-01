import {Component, AfterViewInit} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
declare var $ : any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
      AlertComponent, DATEPICKER_DIRECTIVES
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'app works!';
  date: Date = new Date();

  ngAfterViewInit() {
    $.material.init()
  }
}
