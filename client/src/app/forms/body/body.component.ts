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

  get invNumber() {
    return this.fakturaService.invNumber.value;
  }

  set invNumber(value: string) {
    this.fakturaService.invNumber.next(value);
  }

  get invDate() {
    return this.fakturaService.invDate.value;
  }

  set invDate(value: string) {
    this.fakturaService.invDate.next(value);
  }

  get salutation() {
    return this.fakturaService.salutation.value;
  }

  set salutation(value: string) {
    this.fakturaService.salutation.next(value);
  }

  get preamble() {
    return this.fakturaService.preamble.value;
  }

  set preamble(value: string) {
    this.fakturaService.preamble.next(value);
  }

  get closing() {
    return this.fakturaService.closing.value;
  }

  set closing(value: string) {
    this.fakturaService.closing.next(value);
  }
}
