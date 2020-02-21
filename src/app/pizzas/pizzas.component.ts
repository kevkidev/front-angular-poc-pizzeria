import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzasService } from '../services/pizzas.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizzas: Array<Pizza>;

  constructor(private pizzaService: PizzasService) {

  }

  ngOnInit() {
    this.pizzaService.findPizzas().then(pizzas => {
      this.pizzas = pizzas;
    });
  }

}
