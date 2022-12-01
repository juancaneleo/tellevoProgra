import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {Router, RouterOutlet} from '@angular/router';
import { environment } from 'src/environments/environment';
import { MenuController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController, private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet) { }

  ngOnInit(): void {
    if (environment.IS_LOGGED == false){
      this.router.navigate(['login'])
    }
    this.menu.enable(true)
    this.routerOutlet.swipeGesture = true;
  }

  cargarLoading(mensaje: string){
    this.presentLoading(mensaje);
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

}
