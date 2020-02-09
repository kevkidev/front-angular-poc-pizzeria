import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { TrainsComponent } from './trains/trains.component';

const routes: Routes = [
  { path: "pizzas", component: UserComponent },
  { path: "pizzas/favories", component: MainComponent },
  { path: "compte", component: TrainsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
