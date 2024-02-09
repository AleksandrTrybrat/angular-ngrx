import { Route } from '@angular/router';
import { TodoPageComponent } from '../page/todo-page/todo-page.component';

export const todoRoutes: Route[] = [
  {
    path: '',
    component: TodoPageComponent,
  },
];
