import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  items: string[] =[]
  @Output() newTask = new EventEmitter<Array<string>>() 
  constructor() { }

  ngOnInit(): void {
  }

  addTask(value:any) {
    this.items.push(value)
    this.newTask.emit(this.items)
    console.log(this.items)
  }

}


