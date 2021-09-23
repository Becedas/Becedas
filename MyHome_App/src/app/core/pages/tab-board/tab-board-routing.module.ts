import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBoardPage } from './tab-board.page';

const routes: Routes = [
  {
    path: '',
    component: TabBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBoardPageRoutingModule {}
