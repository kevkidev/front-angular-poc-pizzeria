import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { TrainComponent } from './train/train.component';

const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "home", component: MainComponent },
  { path: "train", component: TrainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
