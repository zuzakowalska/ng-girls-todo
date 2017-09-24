import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private title = 'to do list';
  @Output() submit: EventEmitter<string> = new EventEmitter();

constructor() {
  this.changeTitle('I love Angular');
}

  ngOnInit() {
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
