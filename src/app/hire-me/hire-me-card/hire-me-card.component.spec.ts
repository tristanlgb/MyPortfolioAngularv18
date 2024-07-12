import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeCardComponent } from './hire-me-card.component';

describe('HireMeCardComponent', () => {
  let component: HireMeCardComponent;
  let fixture: ComponentFixture<HireMeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireMeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HireMeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
