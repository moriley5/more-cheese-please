import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GridComponent } from './grid/grid.component';
import { CheeseComponent } from './cheese/cheese.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: 'home', component: GridComponent },
  { path: 'cheese/:id', component: CheeseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GridComponent,
    CheeseComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
