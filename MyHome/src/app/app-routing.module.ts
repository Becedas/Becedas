import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./Pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./Pages/bills/bills.module').then( m => m.BillsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
