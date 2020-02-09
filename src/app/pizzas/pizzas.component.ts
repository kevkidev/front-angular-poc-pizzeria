import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizza: Pizza = {
    id: 1,
    name: 'Napolitaine'
  };

  constructor() { }

  ngOnInit() {
  }

}
