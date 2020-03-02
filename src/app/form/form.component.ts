import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  newCustomer = {
  firstNameInput: '',
  lastNameInput: '',
  date: ''
}
firstname: any;
lastname: any;
date: any;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
   this.firstname = "The user's first name is " + this.newCustomer.firstNameInput;
   this.lastname = "The user's last name is " + this.newCustomer.lastNameInput;
   this.date = "The user chose this date: " + this.newCustomer.date;
  }

  onClear(){
    this.newCustomer.firstNameInput = '';
    this.newCustomer.lastNameInput = '';
    this.newCustomer.date = '';
    this.firstname = '';
    this.lastname = '';
    this.date = '';
  }


}
