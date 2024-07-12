import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeComponent } from './hire-me.component';

describe('ProjectComponent', () => {
  let component: HireMeComponent;
  let fixture: ComponentFixture<HireMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
