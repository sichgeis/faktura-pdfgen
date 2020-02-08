import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  salutationChanged(value: string) {

  }

  PreambleChanged(value: string) {
    console.log(value)
  }

  ClosingChanged(value: string) {

  }

  invoiceNumberChanged(value: string) {

  }

  invoiceDateChanged(value: string) {

  }
}
