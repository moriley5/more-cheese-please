import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Hover Event
  mouseEnter(div: string) {
    console.log("Mouse enter: " + div);
  }

}