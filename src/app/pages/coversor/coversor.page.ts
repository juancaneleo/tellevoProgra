import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConversorService } from 'src/app/services/conversor.service';
import { addEventListener } from '@ionic/core/dist/types/utils/helpers';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

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

  ngOnInit() {
    
    if (environment.IS_LOGGED == false){
      this.router.navigate(['login'])
    }
    this.servicio.getValores().subscribe((res:any) => {
      this.dolarValor = res.dolar.valor
      this.euroValor = res.euro.valor 
    })
    





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
