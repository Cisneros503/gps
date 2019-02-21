import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ol } from '../../assets/ol5/build/ol.js';

//import { ol } from 'ol';
//import { Map } from 'ol/Map';
//import { View } from 'ol/View';
//import { TileLayer } from 'ol/layer/Tile';
//import { XYZ } from 'ol/source/OSM';

/**
 * Generated class for the RecuperarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})
export class RecuperarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarPage');
  }
  
  refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
/*
  mapa();
  mapa(){

    console.log("****EJECUTA LA F DE MAPA******");

    var map = new ol.Map({ });

    
    // Declare a Tile layer with an OSM source
    var osmLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });
    // Create latitude and longitude and convert them to default projection
    var birmingham = ol.proj.transform([-1.81185, 52.44314], 'EPSG:4326', 'EPSG:3857');
    // Create a View, set it center and zoom level
    var view = new ol.View({
      center: birmingham,
      zoom: 6
    });
    // Instanciate a Map, set the object target to the map DOM id
    var map = new ol.Map({
      target: 'map'
    });
    // Add the created layer to the Map
    map.addLayer(osmLayer);
    // Set the view for the map
    map.setView(view);
    
  }

  */
  /*
  mapa(){
    /*
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    
  }*/

}
