import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmericaPage } from './america.page';

const routes: Routes = [
  {
    path: '',
    component: AmericaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmericaPageRoutingModule {}
