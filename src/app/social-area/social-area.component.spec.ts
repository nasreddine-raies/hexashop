import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAreaComponent } from './social-area.component';

describe('SocialAreaComponent', () => {
  let component: SocialAreaComponent;
  let fixture: ComponentFixture<SocialAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
