import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
    p:first-child{
    padding: 10px;
    color:#fefefe;
    background: green;
    font-weight: bold;
    text-transform:uppercase;
  }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
