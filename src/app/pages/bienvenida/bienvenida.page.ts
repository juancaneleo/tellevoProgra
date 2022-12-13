import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { MenuController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';
import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get} from "firebase/database";



@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController, private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet, private crud: CrudService) { }
  app: any;

  ngOnInit(): void {
      if (environment.IS_LOGGED == false){
      this.router.navigate(['login'])
      }

    
      this.app = initializeApp(environment.firebaseConfig);
      const dbRef = ref(getDatabase(this.app));
      get(child(dbRef, `usuarios/${environment.ID_USER}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("este es el wn ->");
          
          console.log(snapshot.val());


        } else {
          console.log("No data available");
          this.router.navigate(['register-form'])
        }
        
      }).catch((error) => {
        console.error(error);
      });
    environment.IS_REGISTERED = true;
  

    alert("is registred = " + environment.IS_REGISTERED)
    
    //if (environment.IS_REGISTERED == false){
     // this.router.navigate(['register-form'])
    //}
  
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
