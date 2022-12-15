import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiviajePage } from './miviaje.page';

const routes: Routes = [
  {
    path: '',
    component: MiviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiviajePageRoutingModule {}
