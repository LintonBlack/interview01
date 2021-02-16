import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceholderComponent } from './shared/components/placeholder/placeholder.component';

const routes: Routes = [

  {
    path: 'challenge',
    component: PlaceholderComponent,
  },

  //
  // The Wildcard route
  //

  {
    path: '**',
    redirectTo: 'challenge'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
