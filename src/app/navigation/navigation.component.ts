import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToAboutPage() {
    console.log("Clicked on About!");
    // How to redirect to entirely new page???
    this.router.navigate(['/about']);
  }

  goToContactPage() {
    console.log("Clicked on Contact!");
    // How to redirect to entirely new page???
    this.router.navigate(['/contact']);

    /* TO-DO
    Create a navigation.module.ts file with its own route configuration
    */
  }
}
