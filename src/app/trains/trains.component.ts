import { Component, OnInit } from '@angular/core';
import { Train } from '../models/train';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  trains: Train[];

  constructor() {
    this.trains = [
      new Train("Paris"),
      new Train("Lyon"),
      new Train("Nantes"),
      new Train("Marseil"),
    ];
  }

  ngOnInit() {

  }

}
