import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit {

  isAuth = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    // je m'abonne et je definit le comportement après avoir reçu la valeur
    this.authService.getConnectionStatus().subscribe({
      next: status => {
        console.log(`${status ? "online" : "offline"}`);
        this.isAuth = status;
      }
    });
  }

  onSignOut() {
    this.authService.signOut();
  }
}
