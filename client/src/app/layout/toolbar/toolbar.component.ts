import {Component, OnInit} from '@angular/core';
import {faDownload, faFileDownload, faFilePdf, faFillDrip, faTrash, faUpload} from '@fortawesome/free-solid-svg-icons';
import {FakturaService} from "../../faktura.service";
import {saveAs} from 'file-saver';
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private fakturaService: FakturaService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  saveForm() {
    // todo
  }

  loadForm() {
    // todo
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
    }, this.showWarning());
  }

  private showWarning() {
    return error => {
      if (error.status === 412) {
        this._snackBar.open("All fields of the form need to be filled in order to render the pdf document.", "Dismiss");
      } else console.log('http error: ', error)
    };
  }

  savePdf() {
    this.fakturaService.generatePdf().subscribe(response => {
      saveAs(response);
    }, error => {
      if (error.status === 412) {
        this._snackBar.open("All fields of the form need to be filled in order to render the pdf document.", "Dismiss");
      } else console.log('http error: ', error)
    });
  }

  preFillForm() {
    this.fakturaService.setSampleData();
  }
}
