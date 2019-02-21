import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
//import { NavController } from 'ionic-angular';
//*********************************************** */
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { HttpModule, Http } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RecuperarPage } from '../pages/recuperar/recuperar'
import { AjustesPage } from '../pages/ajustes/ajustes';
import { DetalleRastreadorPage } from '../pages/detalle-rastreador/detalle-rastreador'
import { SeguimientoPage } from '../pages/seguimiento/seguimiento';
import { IngresarPage } from '../pages/ingresar/ingresar';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  //se define un rootPage para darle uso al NavController
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(/*public navCtrl: NavController,*/ public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Recuperar', component: RecuperarPage },
      { title: 'Ajustes', component: AjustesPage },
      { title: 'Detalle-Rastreador', component: DetalleRastreadorPage },
      { title: 'Seguimiento', component: SeguimientoPage },
      { title: 'Ingresar', component: IngresarPage }
      
    ];

    this.carros();

    

  }

  

  //arreglo con datos quemados
  datos_quemados = [
    { nombre: 'Equipo1', placa: '1', estado: 'stop', seleccionado: true },
    { nombre: 'Nombre Del Equipo2', placa: '2', estado: '27 km/h', seleccionado: true },
    { nombre: 'Nombre Del Equipo3', placa: '3', estado: '85 km/h', seleccionado: true },
    { nombre: 'Nombre Del Equipo4', placa: '4', estado: 'neutro', seleccionado: true },
    { nombre: 'Nombre Del Equipo5', placa: '5', estado: '39 km/h', seleccionado: true },
    { nombre: 'Nombre Del Equipo6', placa: '6', estado: 'stop', seleccionado: true },
    { nombre: 'Nombre Del Equipo7', placa: '7', estado: '90 km/h', seleccionado: true },
    { nombre: 'Nombre Del Equipo8', placa: '8', estado: '64 km/h', seleccionado: true },
  ];

  //Declaro el array de objetos para los vehiculos a mostrar en el menu.
  ar_car: Array<{nombre: string, placa: string, estado: string, seleccionado: boolean}>;

  //Func carros cambia el valor del array con los valores de los vehiculos a mostrar en menu.
  carros(){
    this.ar_car = [];
    for (let i of this.datos_quemados ) {
      this.ar_car.push({
        nombre: i.nombre,
        placa: '000-0' + i.placa,
        estado: i.estado,
        seleccionado: i.seleccionado
      });
    }
  }

  


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  iraLogin(){
    //console.log("Prueba"); 
    this.nav.setRoot(LoginPage);
  }

  iraMapa(){
    //console.log("Prueba"); 
    this.nav.setRoot(HomePage);
  }

  iraAjustes(){
    this.nav.setRoot(AjustesPage);
  }

  iraDetRastreador(){
    this.nav.setRoot(DetalleRastreadorPage);
  }

  
  

  verCasa: boolean = false;
  verOfi: boolean = false;
  filtros: boolean = false;
  buscar_vehiculos: boolean = false;
  
  show(ver: string){
    switch (ver) {
      case 'filtros':
        if(this.filtros == true){
          this.filtros = false;
        }else{
          this.filtros = true;
        }       
        break;
      case 'buscar_vehiculos':
        if(this.buscar_vehiculos == true){
          this.buscar_vehiculos = false;
        }else{
          this.buscar_vehiculos = true;
        }   
        break;
      case 'verOfi':
        if(this.verOfi == true){
          this.verOfi = false;
        }else{
          this.verOfi = true;
        }
        break;
      case 'verCasa':
        if(this.verCasa == true){
          this.verCasa = false;
        }else{
          this.verCasa = true;
        }
        break;
    
      default:
        break;
    }
  }

  

  alerta() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Seleccione Grupos de Vehiculos');

    alert.addInput({
      type: 'checkbox',
      label: 'Oficina',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Casa',
      value: 'value2'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Hecho',
      handler: data => {
        console.log('Checkbox data:', data);
        
      }
    });
    alert.present();
  }







}

