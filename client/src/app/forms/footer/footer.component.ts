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
    return this.fakturaService.taxId.value;
  }

  set taxId(value: string) {
    this.fakturaService.taxId.next(value);
  }

  get bankName() {
    return this.fakturaService.bankName.value;
  }

  set bankName(value: string) {
    this.fakturaService.bankName.next(value);
  }

  get iban() {
    return this.fakturaService.iban.value;
  }

  set iban(value: string) {
    this.fakturaService.iban.next(value);
  }

  get bic() {
    return this.fakturaService.bic.value;
  }

  set bic(value: string) {
    this.fakturaService.bic.next(value);
  }
}
