import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviajePage } from './enviaje.page';

const routes: Routes = [
  {
    path: '',
    component: EnviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviajePageRoutingModule {}
