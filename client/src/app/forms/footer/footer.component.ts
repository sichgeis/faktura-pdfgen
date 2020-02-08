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

  taxIdChanged(value: string) {
    this.fakturaService.taxId.next(value);
  }

  bankNameChanged(value: string) {
    this.fakturaService.bankName.next(value);
  }

  ibanChanged(value: string) {
    this.fakturaService.iban.next(value);
  }

  bicChanged(value: string) {
    this.fakturaService.bic.next(value);
  }
}
