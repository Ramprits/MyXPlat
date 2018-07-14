import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CONTACT_COMPONENTS, ContactComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...CONTACT_COMPONENTS],
  exports: [...CONTACT_COMPONENTS]
})
export class ContactModule {}
