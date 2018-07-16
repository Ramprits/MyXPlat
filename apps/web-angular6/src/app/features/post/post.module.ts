import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { POST_CPMPONENT } from 'apps/web-angular6/src/app/features/post';

export const routes: Routes = [
  {
    path: '',
    component: PostComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...POST_CPMPONENT],
  exports: [...POST_CPMPONENT]
})
export class PostModule {}
