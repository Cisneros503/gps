import { Component } from '@angular/core';
import { NavController, ShowWhen } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  mensajes: boolean = false;
  recorrido: boolean = true;
  eventos: boolean = false;
  
  show(ver: string){
    switch (ver) {
      case 'mensajes':
        if(this.mensajes == true){
          this.mensajes = false;
          this.recorrido = false;
          this.eventos = false;
        }else{
          this.mensajes= true;
          this.recorrido = false;
          this.eventos = false;
        }       
        break;
      case 'recorrido':
        if(this.recorrido == true){
          this.mensajes = false;
          this.recorrido = false;
          this.eventos = false;
        }else{
          this.mensajes= false;
          this.recorrido = true;
          this.eventos = false;
        }       
        break;
        case 'eventos':
        if(this.eventos == true){
          this.mensajes = false;
          this.recorrido = false;
          this.eventos = false;
        }else{
          this.mensajes= false;
          this.recorrido = false;
          this.eventos = true;
        }       
        break;
      default:
        break;
    }
  }

 
  

}







