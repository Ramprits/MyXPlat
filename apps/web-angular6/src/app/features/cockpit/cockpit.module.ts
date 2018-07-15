import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { COCKPIT_COMPONENT, CockpitComponent } from './components';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: CockpitComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COCKPIT_COMPONENT, CockpitComponent],
  exports: [...COCKPIT_COMPONENT, CockpitComponent]
})
export class CockpitModule {}
