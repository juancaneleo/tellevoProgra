import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviajePageRoutingModule } from './enviaje-routing.module';

import { EnviajePage } from './enviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviajePageRoutingModule
  ],
  declarations: [EnviajePage]
})
export class EnviajePageModule {}
