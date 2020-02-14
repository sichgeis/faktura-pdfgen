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
    return this.fakturaService.form.company.value
  }

  set company(value: string) {
    this.fakturaService.form.company.next(value);
  }

  get recName() {
    return this.fakturaService.form.recName.value;
  }

  set recName(value: string) {
    this.fakturaService.form.recName.next(value);
  }

  get recCompany() {
    return this.fakturaService.form.recCompany.value;
  }

  set recCompany(value: string) {
    this.fakturaService.form.recCompany.next(value);
  }

  get recStreet() {
    return this.fakturaService.form.recStreet.value;
  }

  set recStreet(value: string) {
    this.fakturaService.form.recStreet.next(value);
  }

  get recCity() {
    return this.fakturaService.form.recCity.value;
  }

  set recCity(value: string) {
    this.fakturaService.form.recCity.next(value);
  }

  get street() {
    return this.fakturaService.form.street.value;
  }

  set street(value: string) {
    this.fakturaService.form.street.next(value);
  }

  get city() {
    return this.fakturaService.form.city.value;
  }

  set city(value: string) {
    this.fakturaService.form.city.next(value);
  }

  get phone() {
    return this.fakturaService.form.phone.value;
  }

  set phone(value: string) {
    this.fakturaService.form.phone.next(value);
  }

  get email() {
    return this.fakturaService.form.email.value;
  }

  set email(value: string) {
    this.fakturaService.form.email.next(value);
  }
}
