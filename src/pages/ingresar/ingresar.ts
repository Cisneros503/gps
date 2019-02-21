
import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the IngresarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresar',
  templateUrl: 'ingresar.html',
})

export class IngresarPage {


  constructor(public nav: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarPage');
  }

  
  recuperar(){
    const confirm = this.alertCtrl.create({
      title: 'Realizado!',
      message: 'Puedes verificar en tu bandeja de entrada el correo de recuperacion',
      buttons: [
        {
          text: 'ir a login',
          handler: () => {
            this.iraLogin();
          }
        }
      ]
    });
    confirm.present();
  }
  
  iraLogin(){ 
    this.nav.setRoot(LoginPage);
  }


}
