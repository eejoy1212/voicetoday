import { v4 as uuidv4 } from "uuid";
export class TodoModel {
  //객체로 todo받기
  constructor(todo) {
    this.id = uuidv4();
    this.date = todo.date;
    this.title = todo.title;
    this.content = todo.content;
    this.tags = todo.tags;
    this.completed = todo.completed;
  }
}
