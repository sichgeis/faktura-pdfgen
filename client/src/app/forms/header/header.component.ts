import {Component, OnInit} from '@angular/core';
import {FakturaService} from "../../faktura.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit() {
  }

  get company(): string {
    return this.fakturaService.company.value
  }

  set company(value: string) {
    this.fakturaService.company.next(value);
  }

  get recName() {
    return this.fakturaService.recName.value;
  }

  set recName(value: string) {
    this.fakturaService.recName.next(value);
  }

  get recCompany() {
    return this.fakturaService.recCompany.value;
  }

  set recCompany(value: string) {
    this.fakturaService.recCompany.next(value);
  }

  get recStreet() {
    return this.fakturaService.recStreet.value;
  }

  set recStreet(value: string) {
    this.fakturaService.recStreet.next(value);
  }

  get recCity() {
    return this.fakturaService.recCity.value;
  }

  set recCity(value: string) {
    this.fakturaService.recCity.next(value);
  }

  get street() {
    return this.fakturaService.street.value;
  }

  set street(value: string) {
    this.fakturaService.street.next(value);
  }

  get city() {
    return this.fakturaService.city.value;
  }

  set city(value: string) {
    this.fakturaService.city.next(value);
  }

  get phone() {
    return this.fakturaService.phone.value;
  }

  set phone(value: string) {
    this.fakturaService.phone.next(value);
  }

  get email() {
    return this.fakturaService.email.value;
  }

  set email(value: string) {
    this.fakturaService.email.next(value);
  }
}
