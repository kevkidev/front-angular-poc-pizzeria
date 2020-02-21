import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private pizzas: Array<Pizza>;

  constructor() {
    this.pizzas = [{
      id: 1, name: "Margherita", ingrediants: "tomate, mozzarella, basilic, huile d'olive", price: 12.50,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
    },
    {
      id: 2, name: "Napoletana", ingrediants: "tomate, mozzarella, anchois, olives noires, origan, huile d'olive", price: 16.50,
      imageUrl: "https://live.staticflickr.com/8529/8615955851_f89dc23009_b.jpg"
    },
    {
      id: 3, name: "Regina", ingrediants: "tomate, mozzarella, jambon, champignons", price: 14.50,
      imageUrl: null
    },
    {
      id: 4, name: "Marinara", ingrediants: "tomate, ail, origan, huile d'olive", price: 12.50,
      imageUrl: null
    },
    ];
  }

  findPizzas() {
    return new Promise<Pizza[]>(
      (resolve, reject) => {
        setInterval(() => {
          resolve(this.pizzas);
        }, 800);
      })
  }
}
