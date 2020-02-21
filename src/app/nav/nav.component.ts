import { Component, OnInit } from '@angular/core';

interface Menu {
  path: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title: string;
  menus: Array<Menu>;

  constructor() {
    this.title = "PizzaYoHigh";
    this.menus = [
      { path: "/pizzas", label: "Pizzas" },
      { path: "/pizzas/favories", label: "Favories" },
      { path: "/compte", label: "Compte" },
      { path: "/rxjs", label: "RxJS" },
    ];
  }

  ngOnInit() {
  }

}
