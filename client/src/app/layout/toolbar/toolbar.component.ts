import {Component, OnInit} from '@angular/core';
import {faDownload, faFileDownload, faFilePdf, faFillDrip, faTrash, faUpload} from '@fortawesome/free-solid-svg-icons';
import {FakturaService} from "../../faktura.service";
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  faDownload = faDownload;
  faUpload = faUpload;
  faTrash = faTrash;
  faFilePdf = faFilePdf;
  faFileDownload = faFileDownload;
  faFillDrip = faFillDrip;

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit() {
  }

  saveForm() {

  }

  loadForm() {

  }

  resetForm() {
    this.fakturaService.resetForm();
  }

  openPdf() {
    this.fakturaService.generatePdf().subscribe(response => {
      let blob: Blob = new Blob([response], {type: 'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      console.log(url);
      window.open(url);
    });
  }

  savePdf() {
    this.fakturaService.generatePdf().subscribe(response => {
      saveAs(response);
    });
  }

  preFillForm() {
    this.fakturaService.setSampleData();
  }
}
