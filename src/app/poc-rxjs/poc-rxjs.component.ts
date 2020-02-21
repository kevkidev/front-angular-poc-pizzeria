import { Component, OnInit } from '@angular/core';
import { PocRxjsService } from '../services/poc-rxjs.service';
import { Observable, Subscription, of } from 'rxjs';
import { map, first, filter } from 'rxjs/operators';

@Component({
  selector: 'app-poc-rxjs',
  templateUrl: './poc-rxjs.component.html',
  styleUrls: ['./poc-rxjs.component.css']
})
export class PocRxjsComponent implements OnInit {

  private data: Observable<string>;
  subs: Array<Subscription>;
  index: number;
  thereAreSubs: boolean;
  max: number;

  constructor(private service: PocRxjsService) {
    this.subs = new Array<Subscription>();
    this.max = 0;
  }

  ngOnInit() {
    this.data = this.service.retrieveData();
    this.updateSubsSize();
  }

  /**
   * Create a subscribtion and put it into a liste
   */
  makeNewSubscribe() {
    this.subs.push(this.service.subscribe(this.data));
    this.updateSubsSize();
    this.updateMax();
  }

  private updateSubsSize() {
    this.thereAreSubs = this.subs.length > 0;
  }

  unsubscribeByOne() {
    this.subs[this.index].unsubscribe;
    this.subs.slice(this.index, this.index);
    this.updateMax();
  }

  createObservable() {
    this.service.createObservable();
  }

  updateMax() {
    this.max = (this.subs.length > 0) ? this.subs.length - 1 : 0;
  }

  // Quels sont les 2 types d'operateur ?
  // Pipe : utiliser pour rendre le programme plus lisible
  // Creation

  piping() {
    // sans pipe
    // op4()(op3()(op2()(op1()(obs))))

    // avec pipe
    // obs.pipe(op1(), op2(), op3(), op3());

    const obs = new Observable<number>(subs => {
      subs.next(1);
      subs.next(2);
      subs.next(3);
    });

    of(1, 2, 3, 4, 5, 6).pipe(
      map(x => x * x),
      filter(x => x > 10),
      first()
    ).subscribe(v => console.log(v));
  }

}
