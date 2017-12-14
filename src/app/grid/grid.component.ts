import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  // Create an array of cheeses
  cheeses = [
    { id: 1, name: 'Asiago', origin: 'Italy', description: 'Slice it fresh and use it on a panini', image: '/assets/images/cheese/asiago.jpg' },
    { id: 2, name: 'Brie', origin: 'France', description: 'Tastes like heaven', image: '/assets/images/cheese/brie.jpg' },
    { id: 3, name: 'Camembert', origin: 'Normandy (northern France)', description: 'Soft and creamy, the sweet sister of Brie', image: '/assets/images/cheese/camembert.jpg' },
    { id: 4, name: 'Cheddar', origin: 'England', description: 'Most popular cheese in the United Kingdom', image: '/assets/images/cheese/cheddar.jpg' },
    { id: 5, name: 'Colby-Jack', origin: 'America', description: 'A classic combo of Colby and Monterey Jack', image: '/assets/images/cheese/colby-jack.jpg' },
    { id: 6, name: 'Feta', origin: 'Greece', description: 'Good on almost everything', image: '/assets/images/cheese/feta.jpg' },
    { id: 7, name: 'Gorgonzola', origin: 'Italy', description: "One of the world's oldest blue-veined cheeses", image: '/assets/images/cheese/gorgonzola.jpg' },
    { id: 8, name: 'Gouda', origin: 'Netherlands', description: 'One of the most popular cheeses worldwide', image: '/assets/images/cheese/gouda.jpg' },
    { id: 9, name: 'Mozzarella', origin: 'Italy', description: 'Made from water buffalo milk', image: '/assets/images/cheese/mozzarella.jpg' },
    { id: 10, name: 'Pecorino Romano', origin: 'Italy', description: 'Suited primarly for grating', image: '/assets/images/cheese/romano.jpg' },
    { id: 11, name: 'Roquefort', origin: 'France', description: "Known as the 'cheese of kings and popes'", image: '/assets/images/cheese/roquefort.jpg' },
    { id: 12, name: 'Swiss', origin: 'Switzerland', description: 'Full of holes, but decent on a ham sandwich', image: '/assets/images/cheese/swiss.jpg' }
    //{ name: 'American', origin: 'America', description: 'Processed, naturally' }
  ]

  constructor() { }

  ngOnInit() {
  }
}
