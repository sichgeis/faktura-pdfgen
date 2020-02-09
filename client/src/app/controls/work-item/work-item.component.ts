import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkItem} from "../../forms/expenses/expenses.component";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  @Input() workItem: BehaviorSubject<WorkItem>;
  @Output() workItemChanged = new EventEmitter<WorkItem>();
  private _workItem: WorkItem;

  constructor() {
  }

  ngOnInit() {
    this.workItem.subscribe(item => {
      this._workItem = item
    });
  }

  get title(): string {
    return this.workItem.value.title;
  };

  set title(value: string) {
    this._workItem.title = value;
    this.workItem.next(this._workItem);
  }

  get hours(): number {
    return this.workItem.value.hours;
  };

  set hours(value: number) {
    this._workItem.hours = value;
    this.workItem.next(this._workItem);
  }

  get rate(): number {
    return this.workItem.value.rate;
  }

  set rate(value: number) {
    this._workItem.rate = value;
    this.workItem.next(this._workItem);
  }
}
