import { v4 as uuidv4 } from 'uuid';
export class TagModel {
  constructor({ name = '', color = '#fff' }) {
    this.id = uuidv4();
    this.name = name;
    this.color = color;
  }
}
