import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerElementComponent } from './components/server-element.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SERVERELEMENT_COMPONENT } from './components';

export const routes: Routes = [
  {
    path: '',
    component: ServerElementComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [ServerElementComponent],
  exports: [ServerElementComponent]
})
export class ServerElementModule {}
