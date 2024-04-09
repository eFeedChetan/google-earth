import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  // imports: [
  //   RouterModule.forRoot(routes, {
  //     initialNavigation: 'enabledBlocking',
  //     scrollPositionRestoration: 'enabled',
  //   }),
  // ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
