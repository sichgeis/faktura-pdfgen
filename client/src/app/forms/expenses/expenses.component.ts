import {Component, OnInit} from '@angular/core';
import {FakturaService} from "../../faktura.service";
import {BehaviorSubject} from "rxjs";
import {faMinusSquare, faPlusSquare} from "@fortawesome/free-solid-svg-icons";

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
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit(): void {
  }

  get workItems(): Array<BehaviorSubject<WorkItem>> {
    return this.fakturaService.form.workItems.value;
  }

  pushWorkItem() {
    const workItems = this.fakturaService.form.workItems.value;
    workItems.push(new BehaviorSubject<WorkItem>({
      hours: undefined,
      rate: undefined,
      title: undefined
    }));
    this.fakturaService.form.workItems.next(workItems);
  }

  popWorkItem() {
    const workItems = this.fakturaService.form.workItems.value;
    workItems.pop();
    this.fakturaService.form.workItems.next(workItems);
  }
}
