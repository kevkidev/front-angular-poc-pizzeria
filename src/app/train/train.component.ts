import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Train } from '../models/train';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  @Input() train: Train;
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.train);
    // this.trains = new Array<Train>();
    // this.http.get<any>('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
    //   .subscribe(
    //     data => {
    //       this.extractData(data);
    //       this.trains = data.connections;
    //       console.log(JSON.stringify(data));
    //     }
    //   )

    // retourne un number toutes les 2s après 1s
    // timer(1000, 2000).pipe(
    //   map(number => number + 1)
    // ).subscribe(
    //   input => console.log(input)
    // )
  }

  //   extractData(data: any) {
  //     data.connections.forEach(c => {
  //       let train = new Train(c.from.station.name);
  //       this.trains.push(train);
  //     });
  //   }
}
