import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { TrainsComponent } from './trains/trains.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  { path: "pizzas", component: PizzasComponent },
  { path: "pizzas/favories", component: MainComponent },
  { path: "compte", component: TrainsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
