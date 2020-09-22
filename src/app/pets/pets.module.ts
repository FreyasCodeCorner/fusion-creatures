import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptpetComponent } from './adoptpet/adoptpet.component';
import { PetCollectionComponent } from './pet-collection/pet-collection.component';
import { PetTradingComponent } from './pet-trading/pet-trading.component';
import { PetBreedingComponent } from './pet-breeding/pet-breeding.component';
import { AdoptPetComponent } from './adopt-pet/adopt-pet.component';



@NgModule({
  declarations: [AdoptpetComponent, PetCollectionComponent, PetTradingComponent, PetBreedingComponent, AdoptPetComponent],
  imports: [
    CommonModule
  ]
})
export class PetsModule { }
