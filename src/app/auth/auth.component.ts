import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isAuth = false;
  }

  ngOnInit() {
    // Abonnes toi à ce sujet et afficher le message en fonction du statut
    this.authService.getConnectionStatus().subscribe({
      next: status => {
        console.log(`${status ? "online" : "offline"}`);
        this.isAuth = status;
        //this.router.navigate(['pizzas']);
      }
    });

    this.authService.getConnectionStatus()
  }

  onSignIn() {
    // lance le processus de connection à l'app
    this.authService.signIn();
  }
}
