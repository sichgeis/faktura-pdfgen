import {Component, OnInit} from '@angular/core';
import {FakturaService} from "../../faktura.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit() {
  }

  invoiceNumberChanged(value: string) {
    this.fakturaService.invNumber.next(value);
  }

  invoiceDateChanged(value: string) {
    this.fakturaService.invDate.next(value);
  }

  salutationChanged(value: string) {
    this.fakturaService.salutation.next(value);
  }

  preambleChanged(value: string) {
    this.fakturaService.preamble.next(value);
  }

  closingChanged(value: string) {
    this.fakturaService.closing.next(value);
  }
}
