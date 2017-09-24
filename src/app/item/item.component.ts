import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  constructor() { }

  @Output() remove: EventEmitter<any> = new EventEmitter();

  removeItem(item) {
  this.remove.emit(item);
}

  ngOnInit() {
  }

}
