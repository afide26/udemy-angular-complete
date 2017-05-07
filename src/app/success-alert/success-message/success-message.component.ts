import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styles: [`
    p{
      padding-left: 20px;
      background:#4fc64f;
    }

    `]
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
