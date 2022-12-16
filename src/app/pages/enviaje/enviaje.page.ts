import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { get, getDatabase, onValue, ref, remove, update } from 'firebase/database';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-enviaje',
  templateUrl: './enviaje.page.html',
  styleUrls: ['./enviaje.page.scss'],
})
export class EnviajePage implements OnInit {


  app = initializeApp(environment.firebaseConfig);
  db = getDatabase(this.app);
  dbRef = ref(this.db, 'viajes/');
  idViaje: any;
  data:any;
  numero:any;
  numerodado:any;
  conductor:any;


  constructor(private router:Router) { }

  async ngOnInit() {
    this.getViaje()
    await new Promise(r => setTimeout(r,1000))
    this.getDatos()
    this.observador()
  }
  
  getViaje(){
    var Ref = ref(this.db, 'usuarios/' + environment.ID_USER );
    get(Ref).then( snap => {
      this.idViaje = snap.val().viaje[0]
    })
  
    
  } 
  
  getDatos(){
    alert(this.idViaje)
    var dbRef = ref(this.db, `viajes/${this.idViaje}`)
    get(dbRef).then(snap => {
      this.numerodado = snap.val().numero
    })
    var Ref = ref(this.db, `usuarios/${this.idViaje}`);
    console.log(this.idViaje)
    get(Ref).then(snap => {
      this.conductor = snap.val().nombre
      this.numero = snap.val().numero
    })
  }

  eliminarViaje(){
    var dbRef = ref(this.db, 'usuarios/' + environment.ID_USER );
    update(dbRef, {
      enviaje: false,
      viaje: ""
    })
    
    
    var pasajeroRef = ref(this.db, `viajes/${this.idViaje}/pasajero`);
    remove(pasajeroRef)
    this.router.navigate(['pasajero'])
  }
  
  observador(){
    alert(this.idViaje)
    console.log(this.idViaje)
    var pasajeroRef = ref(this.db, `registroViajes/${this.idViaje}`);
    onValue(pasajeroRef,snap=>{
      console.log(snap.val().activo);
      
      if(snap.val().activo){
        console.log("esta activo");
      } else {
        alert("el conductor cerró el viaje")
        this.eliminarViaje()
      }
    })
  }

}
