import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserInformation} from './user-information.component';

const routes: Routes = [
  {
    path: '',
    component: UserInformation
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInformationRoutingModule { }
