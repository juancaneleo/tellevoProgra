import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref } from 'firebase/database';
import { AlmacenamientoService } from 'src/app/services/almacenamiento.service';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

 profile: any = null;
 nombre: string;
 numero: number;
 urlFoto: string;
 tipo: string;

 app = initializeApp(environment.firebaseConfig);
 db = getDatabase(this.app);

 constructor(private authService: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private router: Router) {
 }

 async ngOnInit() {
   this.cargarDatos()

 }

 
 cargarDatos(){
    var dbRef = ref(this.db, `usuarios/${environment.ID_USER}`); 
    get(dbRef).then(snap => {
     console.log(snap.val());
     this.numero = snap.val().numero;
     this.nombre = snap.val().nombre;
     this.tipo = snap.val().tipo
    })
 }





}
