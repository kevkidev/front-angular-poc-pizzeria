import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: string = "Kevin";
  elements = [1, 2, 3, 4];
  isHighlighted = true;
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  userClick() {
    console.log("clicked");
  }
}
