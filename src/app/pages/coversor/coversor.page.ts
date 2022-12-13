import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConversorService } from 'src/app/services/conversor.service';
import { addEventListener } from '@ionic/core/dist/types/utils/helpers';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get} from "firebase/database";

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {
  dolarValor: number;
  euroValor: number;
  monedaSeleccionada: any;
  resultado: any;


  constructor(private http: HttpClient, private servicio: ConversorService, private router: Router) { 

   }
   app: any;

  ngOnInit() {
    
    if (environment.IS_LOGGED == false){
      this.router.navigate(['login'])
    }
    this.servicio.getValores().subscribe((res:any) => {
      this.dolarValor = res.dolar.valor
      this.euroValor = res.euro.valor 
    })
    

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


  }
  

  convertir(){
    var inputm= document.getElementById("inputmoneda") as HTMLInputElement;
    var inputr= document.getElementById("resultado") as HTMLInputElement;
    if (this.monedaSeleccionada == "dolar"){
      var suma = parseInt(inputm.value) / this.dolarValor 
      inputr.value = suma.toFixed(2).toString()
    }
    else if (this.monedaSeleccionada == "euro") {
      var suma = parseInt(inputm.value) / this.euroValor
      inputr.value = suma.toFixed(2).toString()
    }
  }
  

}
