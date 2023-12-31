import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAustriaComponent } from './bio-austria.component';

describe('BioAustriaComponent', () => {
  let component: BioAustriaComponent;
  let fixture: ComponentFixture<BioAustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioAustriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioAustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
