import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get} from "firebase/database";
import { CrudService } from 'src/app/services/crud.service';



@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(private router: Router, private crud: CrudService) { }
  
  app: any;
  comuna: any;
  numero: any;
  tarifa: any;


  
  ngOnInit(){
   
  }

  ionViewDidEnter() {

    if (environment.IS_LOGGED == false){
      this.router.navigate(['login'])
    }
    this.app = initializeApp(environment.firebaseConfig);
    const dbRef = ref(getDatabase(this.app));


      get(child(dbRef, `usuarios/${environment.ID_USER}`)).then((snapshot :any) => {
        console.log(snapshot)
        console.log(snapshot.val().tipo)

        if (snapshot.exists()) {
          if (snapshot.val().tipo != "chofer") {
          alert("debes ser chofer para acceder aqui")
          this.router.navigate(['bienvenida'])

            
          }

        } else {
          console.log("No data available");
          this.router.navigate(['register-form'])
        }
        
      }).catch((error) => {
        console.error(error);
      });
      

      
      get(child(dbRef, `viajes/${environment.ID_USER}`)).then((snapshot) => {
        if (snapshot.exists()) {
          this.router.navigate(['miviaje'])
          console.log("si existen datos");
        }
        
      }).catch((error) => {
        console.error(error);
      });
  }
  
  addregistro(){
    this.crud.addViaje(this.comuna, environment.ID_USER, this.numero, this.tarifa)
    this.router.navigate(['miviaje'])
  }

}
