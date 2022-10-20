import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childCounter;
  @Output() outputEvent = new EventEmitter();
  parentCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementParentCounter() {
    this.parentCounter++
    this.outputEvent.emit(this.parentCounter)
  }
}
