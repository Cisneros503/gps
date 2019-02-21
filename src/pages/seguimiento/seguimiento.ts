import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeguimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguimiento',
  templateUrl: 'seguimiento.html',
})
export class SeguimientoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguimientoPage');
  }
 
  

  
  ma();
  ma(){
    console.log('***********CORRIENDO SeguimientoPage***************');
    var packageUrl = 'https://raw.githubusercontent.com/openlayers/openlayers.github.io/build/package.json';
    fetch(packageUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      var latestVersion = json.version;
      document.getElementById('latest-version').innerHTML = latestVersion;
      var url = window.location.href;
      var branchSearch = url.match(/\/([^\/]*)\/examples\//);
      var cookieText = 'dismissed=-' + latestVersion + '-';
      var dismissed = document.cookie.indexOf(cookieText) != -1;
      if (branchSearch && !dismissed && /^v[0-9\.]*$/.test(branchSearch[1]) && '5.3.0' != latestVersion) {
        var link = url.replace(branchSearch[0], '/latest/examples/');
        fetch(link, {method: 'head'}).then(function(response) {
          var a = document.getElementById('latest-link');
         
        });
        var latestCheck = document.getElementById('latest-check');
        latestCheck.style.display = '';
        document.getElementById('latest-dismiss').onclick = function() {
          latestCheck.style.display = 'none';
          document.cookie = cookieText;
        }
      }
    });
  }

}
