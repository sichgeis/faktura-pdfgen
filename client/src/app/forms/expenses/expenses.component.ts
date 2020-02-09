import {Component, OnInit} from '@angular/core';
import {FakturaService} from "../../faktura.service";
import {BehaviorSubject} from "rxjs";

export interface WorkItem {
  title: string;
  hours: number;
  rate: number;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit(): void {
    this.fakturaService.workItems.subscribe(data => console.log(data));
  }

  get workItems(): Array<BehaviorSubject<WorkItem>> {
    return this.fakturaService.workItems.value;
  }
}
