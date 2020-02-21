import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connectionStatus: BehaviorSubject<boolean>;

  constructor() {
    // Utilise un BehaviorSubject pour renvoie toujours une valeur à jour à tes observers
    this.connectionStatus = new BehaviorSubject<boolean>(false);
  }

  getConnectionStatus() {
    return this.connectionStatus;
  }

  /**
   * Retourn un observable de boolean avec la valeur true
   */
  signIn() {
    setTimeout(() => {
      this.connectionStatus.next(true);
    }, 2000);
  }


  signOut() {
    setTimeout(() => {
      this.connectionStatus.next(false);
    }, 2000);
  }
}
