import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss'],
})
export class TodoCreateFormUiComponent {
  name: string = '';

  // создание новой записи
  @Output()
  create = new EventEmitter<string>();

  onCreate() {
    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }
  }
}
