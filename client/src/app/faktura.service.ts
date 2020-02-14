import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FakturaForm} from "./faktura-form";

@Injectable({
  providedIn: 'root'
})
export class FakturaService {

  public form = new FakturaForm();
  private serviceUrl: string = '/api/';

  constructor(private httpClient: HttpClient) {
  }

  generatePdf(): Observable<Blob> {
    const formData = this.form.getFormData();
    return this.httpClient.request('POST', this.serviceUrl, {responseType: 'blob', body: formData});
  }

  resetForm() {
    this.form.resetForm();
  }

  setSampleData() {
    this.form.setSampleData();
  }

  saveForm() {
    //todo
    console.log('save', JSON.stringify(this.form));
  }

  loadForm() {
    //todo
  }
}
