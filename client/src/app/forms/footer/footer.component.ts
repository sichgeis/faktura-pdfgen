import {Component, OnInit} from '@angular/core';
import {FakturaService} from "../../faktura.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit() {
  }

  get taxId() {
    return this.fakturaService.form.taxId.value;
  }

  set taxId(value: string) {
    this.fakturaService.form.taxId.next(value);
  }

  get bankName() {
    return this.fakturaService.form.bankName.value;
  }

  set bankName(value: string) {
    this.fakturaService.form.bankName.next(value);
  }

  get iban() {
    return this.fakturaService.form.iban.value;
  }

  set iban(value: string) {
    this.fakturaService.form.iban.next(value);
  }

  get bic() {
    return this.fakturaService.form.bic.value;
  }

  set bic(value: string) {
    this.fakturaService.form.bic.next(value);
  }
}
