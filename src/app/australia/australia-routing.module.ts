import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AustraliaPage } from './australia.page';

const routes: Routes = [
  {
    path: '',
    component: AustraliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AustraliaPageRoutingModule {}
