import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTabBarComponent } from './components/my-tab-bar/my-tab-bar.component';
import { File } from '@ionic-native/file/ngx';


@NgModule({
  declarations: [MyTabBarComponent],
  imports: [
    CommonModule
  ],
  providers:[File]
})
export class CoreModule { }
