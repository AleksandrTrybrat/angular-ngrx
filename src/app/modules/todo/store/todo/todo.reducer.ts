import { ITodo } from '../../model/todo';
import { TodoActions, todoActionsType } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface ITodoState {
  idIncrement: number;
  todoList: ITodo[];
}

// генерация id так как нет бэкенда откуда можно их взять
const initialState: ITodoState = {
  idIncrement: 1,
  todoList: [],
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  // создание новой todo
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false,
          },
        ],
      };
    case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };
    case todoActionsType.edit:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                name: action.payload.name,
              }
            : todo
        ),
      };
    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
      case todoActionsType.load:
        return {
          ...action.payload.state,
        }
    default:
      return state;
  }
};
