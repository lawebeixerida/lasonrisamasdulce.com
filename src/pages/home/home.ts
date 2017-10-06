import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { GalleryPage } from "../gallery/gallery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, toastCtrl: ToastController) {
    let toast = toastCtrl.create({
      message: "Este sitio utiliza cookies. Seguir navegando implica que aceptas nuestra politica de cookies.",
      closeButtonText: "Ok!",
      showCloseButton: true,
      dismissOnPageChange: false
    });

    toast.present();
  }

  showGallery(category: string) {
    this.navCtrl.push(GalleryPage, { cat: category });
  }

}
