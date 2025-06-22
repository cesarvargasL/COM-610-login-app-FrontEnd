import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserInformationRoutingModule} from './user-information-routing.module';
import {UserInformation} from './user-information.component';


@NgModule({
  declarations: [UserInformation],
  imports: [
    CommonModule,
    UserInformationRoutingModule
  ]
})
export class UserInformationModule { }
