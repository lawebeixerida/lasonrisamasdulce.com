import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  items: Array<any>;
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('cat');

    this.items = this.getProducts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }


  getProducts() {
    let products = new Array<any>();

    products.push({
      title: "Mesa de cupcakes",
      text: "Boda de una amiga",
      image: "1.jpg"
    },{
      title: "2 Pisos",
      text: "Variados con frostin y perlas",
      image: "3.jpg"
    },{
      title: "¡Preparados para salir!",
      text: "Cupcakes de chocolate, fresa y nata",
      image: "4.jpg"
    });


    return products;
  }

}
