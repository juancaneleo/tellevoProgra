import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenida', url: 'bienvenida', icon: 'heart' },
    { title: 'Coversor', url: 'coversor', icon: 'paper-plane' },
    { title: 'Clima', url: 'clima', icon: 'heart' },
    { title: 'About', url: 'about', icon: 'paper-plane' },
    { title: 'conductor', url: 'conductor', icon: 'paper-plane' },
    { title: 'pasajero', url: 'pasajero', icon: 'paper-plane' },
    { title: 'Cerrar sesion', url: 'login', icon: 'close' }
 
  ];
  constructor() {}
}
