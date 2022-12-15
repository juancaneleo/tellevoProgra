import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { initializeApp } from "firebase/app";
import { getDatabase, remove, ref, set, child, get} from "firebase/database";
import { CrudService } from 'src/app/services/crud.service';
import {environment} from 'src/environments/environment'
import { Directive, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-miviaje',
  templateUrl: './miviaje.page.html',
  styleUrls: ['./miviaje.page.scss'],
})
export class MiviajePage implements OnInit {
  
  texto: string;
  app: any;
  datos: any;
  haydatos: boolean;
  nohaydatos = true;
  pagina : any;

  data: SafeHtml
  constructor(private sanitizer: DomSanitizer ,private router:Router, public viewContainerRef: ViewContainerRef) { }
  
  ngOnInit(): void {
      
  }

  ionViewDidEnter() {
  this.getData();
  

  this.app = initializeApp(environment.firebaseConfig);
  const dbRef = ref(getDatabase(this.app));
  
  get(child(dbRef, `viajes/${environment.ID_USER}/pasajero`)).then((snapshot) => {
    
        if (snapshot.exists()) {
          //this.router.navigate(['register-form'])
          console.log("si existen datos");
          console.log(snapshot.val());
        } else {
          console.log("no hay datos");
          
        }
        
      }).catch((error) => {
        console.log("no hay datos");
        
        console.error(error);
      });


  }
  
  getData(){
  this.app = initializeApp(environment.firebaseConfig);
  const dbRef = ref(getDatabase(this.app));
  
  get(child(dbRef, `viajes/${environment.ID_USER}/pasajero`)).then((snapshot) => {
    this.datos = "tienes un pasajero asignado, su nombre es "+snapshot.val()
    if (snapshot.exists()){
    this.haydatos = true;
    this.nohaydatos = false;
    this.pagina = "<p> " + this.datos + " </p>"
    this.data = this.sanitizer.bypassSecurityTrustHtml(this.pagina);
    } else {
    this.pagina = "<p>estas esperando un pasajero todavia</p>" 
    this.data = this.sanitizer.bypassSecurityTrustHtml(this.pagina);
    }
      }).catch((error) => {
        console.log("no hay datos");
        console.error(error);
      });
  }
  
  refrescar(){
    environment.RELOAD =true;
    this.router.navigate(['animacion'])
  }
  
  eliminarviaje(){
    alert("apretaste el boton")
    const db = getDatabase();
    const tasksRef = ref(db, 'viajes/' + environment.ID_USER);
    remove(tasksRef).then(() => {
    console.log("viaje eliminado");
    this.router.navigate(['conductor'])
});
  }
  
  


}
