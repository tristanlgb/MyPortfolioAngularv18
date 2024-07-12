import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutCardComponent } from './more-about-card.component';

describe('MoreAboutCardComponent', () => {
  let component: MoreAboutCardComponent;
  let fixture: ComponentFixture<MoreAboutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreAboutCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreAboutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
