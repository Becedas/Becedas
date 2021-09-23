import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBoardPageRoutingModule } from './tab-board-routing.module';

import { TabBoardPage } from './tab-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBoardPageRoutingModule
  ],
  declarations: [TabBoardPage]
})
export class TabBoardPageModule {}
