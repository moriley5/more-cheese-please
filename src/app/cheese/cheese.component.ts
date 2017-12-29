import { Component, OnInit, Input } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { Cheese } from '../cheese';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {

  // Declare properties of individual cheese
  @Input() cheese: Cheese;

  constructor() {
  }

  ngOnInit() {
  }
}
