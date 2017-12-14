import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  // Create an array of cheeses
  cheeses = [
    { name: 'Asiago', origin: 'Italy', description: 'Slice it fresh and use it on a panini', image: '/assets/images/cheese/asiago.jpg' },
    { name: 'Brie', origin: 'France', description: 'Tastes like heaven', image: '/assets/images/cheese/brie.jpg' },
    { name: 'Camembert', origin: 'Normandy (northern France)', description: 'Soft and creamy, the sweet sister of Brie', image: '/assets/images/cheese/camembert.jpg' },
    { name: 'Cheddar', origin: 'England', description: 'Most popular cheese in the United Kingdom', image: '/assets/images/cheese/cheddar.jpg' },
    { name: 'Colby-Jack', origin: 'America', description: 'A classic combo of Colby and Monterey Jack', image: '/assets/images/cheese/colby-jack.jpg' },
    { name: 'Feta', origin: 'Greece', description: 'Good on almost everything', image: '/assets/images/cheese/feta.jpg' },
    { name: 'Gorgonzola', origin: 'Italy', description: "One of the world's oldest blue-veined cheeses", image: '/assets/images/cheese/gorgonzola.jpg' },
    { name: 'Gouda', origin: 'Netherlands', description: 'One of the most popular cheeses worldwide', image: '/assets/images/cheese/gouda.jpg' },
    { name: 'Mozzarella', origin: 'Italy', description: 'Made from water buffalo milk', image: '/assets/images/cheese/mozzarella.jpg' },
    { name: 'Pecorino Romano', origin: 'Italy', description: 'Suited primarly for grating', image: '/assets/images/cheese/romano.jpg' },
    { name: 'Roquefort', origin: 'France', description: "Known as the 'cheese of kings and popes'", image: '/assets/images/cheese/roquefort.jpg' },
    { name: 'Swiss', origin: 'Switzerland', description: 'Full of holes, but decent on a ham sandwich', image: '/assets/images/cheese/swiss.jpg' }
    //{ name: 'American', origin: 'America', description: 'Processed, naturally' }
  ]

  constructor() { }

  ngOnInit() {
  }
}
