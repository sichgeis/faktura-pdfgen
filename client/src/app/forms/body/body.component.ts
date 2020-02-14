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
    return this.fakturaService.form.invNumber.value;
  }

  set invNumber(value: string) {
    this.fakturaService.form.invNumber.next(value);
  }

  get invDate() {
    return this.fakturaService.form.invDate.value;
  }

  set invDate(value: string) {
    this.fakturaService.form.invDate.next(value);
  }

  get salutation() {
    return this.fakturaService.form.salutation.value;
  }

  set salutation(value: string) {
    this.fakturaService.form.salutation.next(value);
  }

  get preamble() {
    return this.fakturaService.form.preamble.value;
  }

  set preamble(value: string) {
    this.fakturaService.form.preamble.next(value);
  }

  get closing() {
    return this.fakturaService.form.closing.value;
  }

  set closing(value: string) {
    this.fakturaService.form.closing.next(value);
  }
}
