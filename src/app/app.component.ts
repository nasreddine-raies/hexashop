import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
    <ul>
      <li><a routerLink="/product">Products</a></li>
      <li><a routerLink="/single-product">Single Product</a></li>
      <li><a routerLink="/contact">Contact Us</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet,MainComponent,HeaderComponent,FooterComponent,HomeComponent,AboutComponent,AppComponent,ContactComponent,ProductComponent,SingleProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hexashop';
}
