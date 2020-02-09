import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
      .subscribe(
        data => this.trainData = data
      )

    // retourne un number toutes les 2s après 1s
    timer(1000, 2000).pipe(
      map(number => number + 1)
    ).subscribe(
      input => console.log(input)
    )
  }

}
