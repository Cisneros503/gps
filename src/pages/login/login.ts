import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecuperarPage } from '../recuperar/recuperar'
//import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //RecuperarPage = "RecuperarPage";
  constructor(/*translate: TranslateService,*/ public navCtrl: NavController, public navParams: NavParams) {
    // this language will be used as a fallback when a translation isn't found in the current language
    //translate.setDefaultLang('en');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  recordar() {
    console.log("si lo llama");
    this.navCtrl.push(RecuperarPage);
  }

}
