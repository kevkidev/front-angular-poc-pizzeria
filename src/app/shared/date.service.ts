import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private date = new Date();

  constructor() { }

  getDate() {
    return new Date();
  }
}
