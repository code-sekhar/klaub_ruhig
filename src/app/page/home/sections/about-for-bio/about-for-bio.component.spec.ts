import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutForBioComponent } from './about-for-bio.component';

describe('AboutForBioComponent', () => {
  let component: AboutForBioComponent;
  let fixture: ComponentFixture<AboutForBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutForBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutForBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
