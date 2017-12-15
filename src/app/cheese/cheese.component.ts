import { Component, OnInit } from '@angular/core';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {

  // Declare properties of individual cheese
  cheese: Cheese;

  constructor() {
  }

  ngOnInit() {
  }
}

// Create Cheese interface (This needs to be moved to a Model eventually)
interface Cheese {
  id: number,
  name: string,
  origin: string,
  description: string,
  image: string
}
