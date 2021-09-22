import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'launches',
    pathMatch: 'full',
  },
  {
    path: 'launches',
    loadChildren: () =>
      import('./launches-list/launches-list.module').then(
        (m) => m.LaunchesListModule
      ),
  },
  {
    path: 'launch/:id',
    loadChildren: () =>
      import('./launch-detail/launch-detail.module').then(
        (m) => m.LaunchDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
