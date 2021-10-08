import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  nativepath: string;
  applicationDirectory='';
  applicationStorageDirectory='';
  dataDirectory='';
  cacheDirectory='';
  externalApplicationStorageDirectory='';
  externalDataDirectory='';
  externalCacheDirectory='';
  externalRootDirectory='';
  tempDirectory='';
  getFreeDiskSpace:any=''; 

  constructor(private fileCtrl: File) {
    //this.goToDir();
   }

   ngOnInit() {
  }

  public goToDir()
  {
    this.applicationDirectory=this.fileCtrl.applicationDirectory;
    this.applicationStorageDirectory=this.fileCtrl.applicationStorageDirectory;
    this.dataDirectory=this.fileCtrl.dataDirectory;
    this.cacheDirectory=this.fileCtrl.cacheDirectory;
    this.externalApplicationStorageDirectory=this.fileCtrl.externalApplicationStorageDirectory;
    this.externalDataDirectory=this.fileCtrl.externalDataDirectory;
    this.externalCacheDirectory=this.fileCtrl.externalCacheDirectory;
    this.externalRootDirectory=this.fileCtrl.externalRootDirectory;
    this.tempDirectory=this.fileCtrl.tempDirectory;
    this.fileCtrl.getFreeDiskSpace().then(data=>{
      this.getFreeDiskSpace=data;
    })
  }
  

}
