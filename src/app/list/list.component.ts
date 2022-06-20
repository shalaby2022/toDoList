import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isCompleted= false;
  isDeleted = false;
  @Input()item:any

  constructor() { }

  ngOnInit(): void {
  }

  completeTask() {
    this.isCompleted = !this.isCompleted;
  }

  deleteTask() {
    this.isDeleted = true;
  }
}
