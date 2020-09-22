import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTradingComponent } from './pet-trading.component';

describe('PetTradingComponent', () => {
  let component: PetTradingComponent;
  let fixture: ComponentFixture<PetTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
