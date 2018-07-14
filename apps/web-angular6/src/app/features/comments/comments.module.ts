import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { COMMENTS_COMPONENTS, CommentsComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: CommentsComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMMENTS_COMPONENTS],
  exports: [...COMMENTS_COMPONENTS]
})
export class CommentsModule {}
