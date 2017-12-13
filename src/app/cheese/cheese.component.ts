import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {

  // Declare properties of individual type of cheese
  cheeseProfile: CheeseProfile;

  constructor() { }

  ngOnInit() {
  }

  // Hover Event
  mouseEnter(div: string) {
    console.log("Mouse enter: " + div);
  }

}

// Create interface (need to put this in a model)
interface CheeseProfile {
  name: string,
  origin: string,
  description: string
}
