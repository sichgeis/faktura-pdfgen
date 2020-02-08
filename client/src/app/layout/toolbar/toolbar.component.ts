import {Component, OnInit} from '@angular/core';
import {faDownload, faFilePdf, faTrash, faUpload} from '@fortawesome/free-solid-svg-icons';
import {FakturaService} from "../../faktura.service";

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

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit() {
  }

  saveForm() {

  }

  loadForm() {

  }

  resetForm() {

  }

  generatePdf() {
    this.fakturaService.generatePdf();
  }
}
