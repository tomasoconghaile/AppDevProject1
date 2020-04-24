import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmericaPageRoutingModule } from './america-routing.module';

import { AmericaPage } from './america.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmericaPageRoutingModule
  ],
  declarations: [AmericaPage]
})
export class AmericaPageModule {}
