// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'contact',
    loadChildren: './features/contact/contact.module#ContactModule'
<<<<<<< HEAD
  },
  {
    path: 'comments',
    loadChildren: './features/comments/comments.module#CommentsModule'
=======
>>>>>>> 67f66617c42e71099b853913a73badd2910b3a8f
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
