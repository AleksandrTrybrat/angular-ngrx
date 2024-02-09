import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ITodoState } from '../store/todo/todo.reducer';
import { todoFeatureSelector } from '../store/todo/todo.selectors';
import { filter } from 'rxjs';
import { TodoLoadStateAction } from '../store/todo/todo.actions';

export const TODO_STORAGE_KEY = 'todo';

@Injectable({
  providedIn: 'root',
})
// работа с локал стораджем
export class TodoSyncStorageService {
  private isInit = false; // приватный чтоб никто не мог его поменять

  constructor(private store$: Store<ITodoState>) {}

  init() {
    if (this.isInit) {
      return;
    }
    this.isInit = true;

    this.loadFormStorage();

    this.store$
      .pipe(
        select(todoFeatureSelector),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(state));
      });

    // подписка на событие изменения локал стораджем
    window.addEventListener('storage', () => this.loadFormStorage());
  }

  private loadFormStorage() {
    const storageState = localStorage.getItem(TODO_STORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(
        new TodoLoadStateAction({
          state: JSON.parse(storageState),
        })
      );
    }
  }
}
