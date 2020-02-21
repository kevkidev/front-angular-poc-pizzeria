import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { TrainsComponent } from './trains/trains.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { AuthComponent } from './auth/auth.component';
import { PocRxjsComponent } from './poc-rxjs/poc-rxjs.component';

const routes: Routes = [
  { path: "pizzas", component: PizzasComponent },
  { path: "pizzas/favories", component: MainComponent },
  { path: "compte", component: TrainsComponent },
  { path: "auth", component: AuthComponent },
  { path: "rxjs", component: PocRxjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
