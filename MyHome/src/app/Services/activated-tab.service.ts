import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatedTabService {

  private tabName: any;
    constructor(){}

    setActiveTab(tab: any){
        this.tabName = tab;
    }
    getActiveTab(){
        return this.tabName;
    }
}
