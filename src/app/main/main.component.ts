import { Component } from '@angular/core';
import {  RouterModule, RouterOutlet,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
// import{routes}
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from 'express';
import { appRoutes } from '../app.routes';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule,RouterOutlet,HeaderComponent, FooterComponent,CommonModule ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  showHeaderFooter=true
  
  constructor(){
    console.log('showHeaderFooter value:', this.showHeaderFooter); // Correct way to log
  }
  }
  


// Bootstrap the MainComponent with the routes
// bootstrapApplication(MainComponent, {
//   providers: [provideRouter(appRoutes)],
// }).catch(err => console.error(err));



