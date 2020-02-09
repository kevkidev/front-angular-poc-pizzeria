import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizza: Pizza = {
    id: 1,
    name: 'Napolitaine'
  };

  constructor() { }

  ngOnInit() {
  }

}
