import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss'],
})
export class TodoListItemUiComponent {
  @Input()
  todo!: ITodo;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<void>();

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onToggle(event: Event) {
    event.preventDefault();
    this.toggle.emit();
  }
}
