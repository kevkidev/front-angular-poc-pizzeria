import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: Pizza;
  imageUrl: string = "http://placehold.it/700x400";

  constructor() { }

  ngOnInit() {
    this.imageUrl = (this.pizza.imageUrl) ? (this.pizza.imageUrl) : this.imageUrl;
  }

  onEatMe() {
    alert(`Vous avez choisi la ${this.pizza.name}. Bon App :)`);
  }
}
