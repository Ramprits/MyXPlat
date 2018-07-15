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
  },
  {
    path: 'comments',
    loadChildren: './features/comments/comments.module#CommentsModule'
  }

  ,
  {
    path: 'cock-pit',
    loadChildren: './features/cockpit/cockpit.module#CockpitModule'
  }


  ,
  {
    path: 'server-element',
    loadChildren: './features/server-element/server-element.module#ServerElementModule'
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
