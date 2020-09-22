import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';



@NgModule({
  declarations: [DashboardComponent, UserProfileComponent, UserSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
