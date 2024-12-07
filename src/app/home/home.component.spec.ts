import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { WomanComponent } from '../woman/woman.component';
import { MenComponent } from '../men/men.component';
import { KidsComponent } from '../kids/kids.component';
import { ExploreComponent } from '../explore/explore.component';
import { SocialAreaComponent } from '../social-area/social-area.component';
import { AppComponent } from '../app.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
