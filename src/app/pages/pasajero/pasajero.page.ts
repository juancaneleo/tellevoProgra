import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, onValue, set, update } from "firebase/database";
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


  constructor() { }

  ngOnInit() {

    this.loadData()
  }


  loadData(){
    onValue(this.dbRef, (snapshot) => {
      this.data = Object.values(snapshot.val());
    });
  }
  
  elegir(id){
    const writeRef = ref(this.db, 'viajes/' + id + '/');
    update(writeRef, {
      pasajero: environment.NAME, 
    })
  }
}
