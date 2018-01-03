import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {

  title = '';

  constructor() { }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
    return this.title;
  }

}
