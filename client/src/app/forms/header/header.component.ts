import {Component, OnInit} from '@angular/core';
import {FakturaService} from "../../faktura.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit() {
  }

  companyChanged(value: string) {
    this.fakturaService.company.next(value);
  }

  recipientNameChanged(value: string) {
    this.fakturaService.recName.next(value);
  }

  recipientCompanyChanged(value: string) {
    this.fakturaService.recCompany.next(value);
  }

  recipientStreetAddressChanged(value: string) {
    this.fakturaService.recStreet.next(value);
  }

  recipientCityChanged(value: string) {
    this.fakturaService.recCity.next(value);
  }

  streetAddressChanged(value: string) {
    this.fakturaService.street.next(value);
  }

  cityAddressChanged(value: string) {
    this.fakturaService.city.next(value);
  }

  phoneNumberChanged(value: string) {
    this.fakturaService.phone.next(value);
  }

  emailAddressChanged(value: string) {
    this.fakturaService.email.next(value);
  }

}
