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

  getSerializedForm() {
    return JSON.stringify(this.form);
  }

  loadForm(file: File) {
    var fileReader = new FileReader();
    const form = this.form;

    fileReader.onload = function (event) {
      // @ts-ignore
      var loadedForm = JSON.parse(event.target.result);
      form.load(loadedForm);
    };

    fileReader.readAsText(file);
  }
}
