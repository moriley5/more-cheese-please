import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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

    this.form = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]], // can also use this instead of email --> pattern('[a-z0-9.@]*')
      message: ['', [Validators.required, Validators.maxLength(500)]]
    })
   }

  ngOnInit() {
  }

  // Create & call a service to send simple email
  //onSubmit(form) {
  //  this.firstName = form.firstName;
  //  this.lastName = form.lastName;
  //  this.email = form.email;
  //  this.message = form.message;
  //}

  // Test out the form
  onSubmit(form) {
    console.log('Submitted form!');
    console.log(form.value);
  }
}
