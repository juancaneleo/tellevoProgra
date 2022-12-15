import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiviajePageRoutingModule } from './miviaje-routing.module';

import { MiviajePage } from './miviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiviajePageRoutingModule
  ],
  declarations: [MiviajePage]
})
export class MiviajePageModule {}
