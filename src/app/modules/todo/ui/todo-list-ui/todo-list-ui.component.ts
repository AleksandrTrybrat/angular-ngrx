import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent {
  // Используем для работы редактирования задачи
  editIds: number[] = [];

  @Input()
  todoList: ITodo[] = [];

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<{ id: number; name: string }>();

  onEditMode(id: number) {
    this.editIds.push(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onToggle(id: number) {
    this.toggle.emit(id);
  }

  onEdit(name: string, id: number) {
    this.editIds = this.editIds.filter((item) => item !== id);
    this.edit.emit({ name, id });
  }
}
