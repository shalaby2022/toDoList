import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  items:Array<string> =[]
  // detection:boolean | undefined
  constructor() { }

  ngOnInit(): void {
  }

  additem(newitem:any) {
    this.items=newitem;
    console.log(this.items);
  }

  // addClass(event:boolean) {
  //   if(event == true) {
  //     this.detection = false;
  //   }
  //   if(event == false) {
  //     event = true;
  //     this.detection = event;
  //   }
  //   console.log(this.detection);
  // }
}
