import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetBreedingComponent } from './pet-breeding.component';

describe('PetBreedingComponent', () => {
  let component: PetBreedingComponent;
  let fixture: ComponentFixture<PetBreedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetBreedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetBreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
