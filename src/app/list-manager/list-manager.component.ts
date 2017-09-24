import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoListStorageService } from '../todo-list-storage.service';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html' ,
  styleUrls: ['./list-manager.component.css'],
  providers: [TodoListService, TodoListStorageService]
})
export class ListManagerComponent implements OnInit {
  title = 'to-do list!';
  public todoList;

  constructor(private todoListService: TodoListService) {
  }


  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoList = this.todoListService.addItem({ title });
}

removeItem(item) {
  this.todoList = this.todoListService.removeItem(item);
}

  // addItem(title: string): void {
  //   this.todoList.push({ title });
  // }
}
