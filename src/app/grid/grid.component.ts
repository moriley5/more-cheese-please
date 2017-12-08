import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter(div: string) {
    console.log("mouse enter : " + div);
  }

  mouseLeave(div: string) {
    console.log('mouse leave :' + div);
  }

}
