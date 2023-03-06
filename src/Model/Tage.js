import { v4 as uuidv4 } from 'uuid';
export class TagModel {
  constructor() {
    this.id = uuidv4();
    this.name = '';
    this.color = '';
  }
}
