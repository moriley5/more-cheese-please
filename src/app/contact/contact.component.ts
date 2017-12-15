import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group ({
      firstName: [' ', Validators.required],
      lastName: [' ', Validators.required],
      email: [' ', Validators.required],
      message: [' ', Validators.required]
    })
  }

  onSubmit() {

  }
  ngOnInit() {
  }

}
