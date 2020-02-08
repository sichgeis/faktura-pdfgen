import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakturaService {

  company = new BehaviorSubject<string>("");

  street = new BehaviorSubject<string>("");
  city = new BehaviorSubject<string>("");
  phone = new BehaviorSubject<string>("");
  email = new BehaviorSubject<string>("");

  recName = new BehaviorSubject<string>("");
  recCompany = new BehaviorSubject<string>("");
  recStreet = new BehaviorSubject<string>("");
  recCity = new BehaviorSubject<string>("");

  invNumber = new BehaviorSubject<string>("");
  invDate = new BehaviorSubject<string>("");
  salutation = new BehaviorSubject<string>("");
  preamble = new BehaviorSubject<string>("");
  closing = new BehaviorSubject<string>("");

  taxId = new BehaviorSubject<string>("");
  bankName = new BehaviorSubject<string>("");
  iban = new BehaviorSubject<string>("");
  bic = new BehaviorSubject<string>("");

  private serviceUrl: string = '/api/';

  constructor(private httpClient: HttpClient) {
  }

  generatePdf(): Observable<Blob> {
    const formData = new FormData();
    formData.append('company_name', this.company.value);
    formData.append('sender_name', this.company.value);
    formData.append('sender_street', this.street.value);
    formData.append('sender_city', this.city.value);
    formData.append('sender_tele', this.phone.value);
    formData.append('sender_email', this.email.value);
    formData.append('rec_name', this.recName.value);
    formData.append('rec_company', this.recCompany.value);
    formData.append('rec_street', this.recStreet.value);
    formData.append('rec_city', this.recCity.value);
    formData.append('inv_id', this.invNumber.value);
    formData.append('inv_date', this.invDate.value);
    formData.append('txt_salutation', this.salutation.value);
    formData.append('txt_preamble', this.preamble.value);
    formData.append('txt_closing', this.closing.value);
    formData.append('tax_id', this.taxId.value);
    formData.append('bank_name', this.bankName.value);
    formData.append('bank_iban', this.iban.value);
    formData.append('bank_bic', this.bic.value);

    return this.httpClient.request('POST', this.serviceUrl, {responseType:'blob', body: formData});
  }
}
