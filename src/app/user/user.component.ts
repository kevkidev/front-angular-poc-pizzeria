import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })

  userInput = "hello";
  form1 = new FormControl('Kevin');

  constructor(public dateService: DateService) { // injecter le service + creer et initialiser la variable d'instance

  }

  ngOnInit() { }

  showForm() {
    console.log(this.userForm);
  }
}
