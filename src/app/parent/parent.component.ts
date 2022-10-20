import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childCounter = 0;
  parentCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementChildCounter() {
    this.childCounter++
  }

  parentEvent(event) {
    if (event) {
      this.parentCounter = event
    }
  }
}
