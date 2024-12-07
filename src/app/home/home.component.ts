import { Component } from '@angular/core';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { MenComponent } from '../men/men.component';
import { WomanComponent } from '../woman/woman.component';
import { KidsComponent } from '../kids/kids.component';
import { ExploreComponent } from '../explore/explore.component';
import { SocialAreaComponent } from '../social-area/social-area.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { ContactComponent } from "../contact/contact.component";
import { ErrComponent } from "../err/err.component";
import { LoginComponent } from "../login/login.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,MainBannerComponent, MenComponent, WomanComponent, KidsComponent, ExploreComponent, SocialAreaComponent, SubscribeComponent, ErrComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
