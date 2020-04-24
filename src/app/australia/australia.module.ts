import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AustraliaPageRoutingModule } from './australia-routing.module';

import { AustraliaPage } from './australia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AustraliaPageRoutingModule
  ],
  declarations: [AustraliaPage]
})
export class AustraliaPageModule {}
