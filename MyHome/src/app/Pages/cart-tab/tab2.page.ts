import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public grocery = [
      { val: 'Tomates', isChecked: true , image: './assets/iconos/Vegetales/tomate.png', market: './assets/iconos/logos/supercor.png'},
      { val: 'Salchichas', isChecked: false, image: './assets/iconos/Carne/salchichas.png', market: './assets/iconos/logos/supercor.png' },
      { val: 'Peras', isChecked: false, image: './assets/iconos/Frutas/pera.png', market: './assets/iconos/logos/supercor.png' },
      { val: 'Naranjas', isChecked: false, image: './assets/iconos/Frutas/naranja.png', market: './assets/iconos/logos/supercor.png' },
      { val: 'Huevos', isChecked: false, image: './assets/iconos/huevos.png', market: './assets/iconos/logos/supercor.png' },
      { val: 'Mermelada', isChecked: false, image: './assets/iconos/Dulces/mermelada.png', market: './assets/iconos/logos/ahorramas.jpeg' },
      { val: 'Cinta de lomo', isChecked: false, image: './assets/iconos/Carne/cerdo.png', market: './assets/iconos/logos/ahorramas.jpeg' },
      { val: 'Ternera', isChecked: false, image: './assets/iconos/Carne/ternera.png', market: './assets/iconos/logos/ahorramas.jpeg' },
      { val: 'Pollo', isChecked: false, image: './assets/iconos/Carne/pierna-de-pollo.png', market: './assets/iconos/logos/supercor.png' },
      { val: 'Manzanas', isChecked: false, image: './assets/iconos/Frutas/manzana.png', market: './assets/iconos/logos/lidl.png' }
  ];
  public data= [];
  numTimesLeft = 5;
  isItemAvailable = false;
  reorderList = false;
  items = [];
  shoppingCart = [];
  constructor() {
    //this.addMoreItems();
  }

  addItems(element){
    console.log(element);
    if (element != null ){
      console.log("HOLA");
      this.data.push(this.grocery[0]);
    }
  }

  reorderItems(ev: CustomEvent<ItemReorderEventDetail>){
    const itemMove = this.grocery.splice(ev.detail.from, 1)[0];
    this.grocery.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }
  //funciones infinite scroll
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();

      this.numTimesLeft -= 1;
      event.target.complete();


      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      /*if (this.form.length == 10) {
        event.target.disabled = true;
      }*/
    }, 500);
  }

  addMoreItems(){
    for (let i =0; i< 10; i++){
      this.data.push(this.grocery[i]);
    }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  initializeItems(){
    this.items = this.grocery;
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value.toLowerCase();;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.reorderList = true;
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
          return (item.val.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  } else {
      this.isItemAvailable = false;
      this.reorderList = false;
  }
}

}
