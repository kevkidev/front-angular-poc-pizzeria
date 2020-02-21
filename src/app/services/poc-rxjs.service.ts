import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocRxjsService {


  // #asynchronous #event-based #observable #future
  // Core type = Observable
  // other types = Observer, Schedulers, Subjects
  // operators = pam, filter, reduce, every, concat, etc... => handle async event as collections
  // Patern = Observer + Iterator 
  // paradigm = fonctionnal programming


  // #Observable : une collection de valeur ou d'evenements future
  // #Observer : une collection de méthodes qui savent écouter les valeurs ou events fournis par l'Observable
  // #Subscription : c'est l'execution d'un observable
  // #Operators : sont des FONCTIONS PURES 
  // #Subject : equivaux a un EventEmitter, permet la multi-diffusion d'un valeur/event a plusieurs Observer
  // #Schedulers : un répartiteur (dispatcher) centralisé qui controle la simultanéité (concurrency), 
  //               permet de coordonnée le moment ou le calcul est fait (setTimeout, requestAnimationFrame, etc..)


  subscriptions: Array<Subscription>;

  constructor() {
    this.subscriptions = new Array();
  }

  retrieveData(): Observable<string> {
    // A Function is a lazily evaluated computation that synchronously returns a single value on invocation.
    // A generator is a lazily evaluated computation that synchronously returns zero to (potentially) infinite values on iteration.
    // A Promise is a computation that may (or may not) eventually return a single value.
    // An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.

    return new Observable(subscriber => {
      try {
        subscriber.next("Hello"); // sync
        subscriber.next("how"); // sync
        subscriber.next("are"); // sync
        setTimeout(() => {
          subscriber.next('you ?'); // async
          subscriber.complete(); // then nothing else can be delivered afterwards
        }, 1000);
      } catch (error) {
        subscriber.error(error); // then nothing else can be delivered afterwards
      }
    });
  }

  subscribe(obs: Observable<string>) {

    console.log('just before subscription');
    const subs = obs.subscribe({
      next(value) { console.log(value); },
      error(error) { console.log('Oups :( ' + error); },
      complete() {
        console.log('done');
      }
    });

    // const subscriptions: Array<Subscription> = subsc.slice(0);
    // subscriptions.push(subs);

    // console.log('entrée taille : ' + subsc.length);
    // console.log('copy size : ' + subscriptions.length);
    console.log('just after subscribe');

    // PULL system : PRODUCER produce data when requested, CONSUMER decide quand recevoir les données (par default en JS)
    // PUSH system : PRODUCER produit la données quand il veut, CONSUMER recoit les données quand elles arrivent

    // Promise => PUSH system => fournit une seule valeur à la fois

    // Souscrire à un observable c'est similaire à appeler une fonction
    // Un Observable peut etre async ou sync, n'est pas comme une promesse, n'est pas comme un EventEmitters
    return subs;
  }

  createObservable() {
    // Creating Observables via constructeur direct
    // Le constructeur d'un observable prend 1 arg qui est une fonction 
    const observable = new Observable((subscriber) => {
      const is = setInterval(() => {
        subscriber.next('New subscription !');
      }, 1000);

      // Provide a way of canceling and disposing the interval resource
      return function unsubscribe() {
        clearInterval(is);
      };
    });

    // effectuer une souscription
    observable.subscribe(value => console.log(value));

    // This is drastically different to event handler APIs like addEventListener / removeEventListener. 
    // With observable.subscribe, the given Observer is not registered as a listener in the Observable. 
    // The Observable does not even maintain a list of attached Observers.
  }

  /**
   * Annuler toutes les subscriptions
   */
  disposeAll() {
    this.subscriptions.every(s => s.unsubscribe());
  }
}
