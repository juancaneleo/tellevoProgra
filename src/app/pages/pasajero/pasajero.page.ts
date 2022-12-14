import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, onValue, set, update, child } from "firebase/database";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

data: any;
app = initializeApp(environment.firebaseConfig);
db = getDatabase(this.app);
dbRef = ref(this.db, 'viajes/');
renderer: any;
div: any;


  constructor(private router:Router) { }

  ngOnInit() {

    this.loadData()
    this.app = initializeApp(environment.firebaseConfig);
      const dbRef = ref(getDatabase(this.app));
      get(child(dbRef, `usuarios/${environment.ID_USER}`)).then((snapshot) => {
        
        if (snapshot.val().enviaje == true){
          this.router.navigate(['enviaje'])
        }
      }).catch((error) => {
        console.error(error);
      });

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
          if (snapshot.val().tipo != "pasajero") {
          alert("debes ser pasajero para acceder aqui")
          this.router.navigate(['bienvenida'])

            
          }

        } else {
          console.log("No data available");
          this.router.navigate(['register-form'])
        }
        
      }).catch((error) => {
        console.error(error);
      });
      }

    

  loadData(){
    onValue(this.dbRef, (snapshot) => {
      this.data = Object.values(snapshot.val());
    });
  }
  
  elegir(id){
    var writeRef = ref(this.db, 'viajes/' + id + '/');
    update(writeRef, {
      pasajero: environment.NAME, 
      pasajeroid: environment.IDENTIFIER, 
    })
    var writeRef = ref(this.db, `usuarios/${environment.ID_USER}`);
    update(writeRef, {
      enviaje: true,
      viaje: id
    })
    this.router.navigate(['enviaje'])
  }
}
