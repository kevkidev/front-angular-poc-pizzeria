import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainComponent } from './train/train.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzasComponent,
    MainComponent,
    UserComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
