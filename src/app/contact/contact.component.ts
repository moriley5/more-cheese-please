import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  message: string;

  constructor(private fb: FormBuilder) {
    //this.createForm();
  }

  //createForm() {
  //  this.form = this.fb.group ({
  //    firstName: [' ', Validators.required],
  //    lastName: [' ', Validators.required],
  //    email: [' ', Validators.required],
  //    message: [' ', Validators.required, Validators.maxLength(500)]
  //  })
  //}

  //onSubmit(form) {
  //  this.firstName = form.firstName;
  //  this.lastName = form.lastName;
  //  this.email = form.email;
  //  this.message = form.message;
  //}

  ngOnInit() {
  }
}
