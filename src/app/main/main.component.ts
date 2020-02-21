import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // if (!this.authService.isAuth) {
    //   this.router.navigate(['auth']);
    // }
  }

  userClick() {
    console.log("clicked");
  }
}
