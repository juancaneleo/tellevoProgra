import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { CrudService } from "src/app/services/crud.service"
import { environment  } from "src/environments/environment"
import {Router } from "@angular/router"


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {
  nombre: string;
  numero: string;
  tipo: string;

  constructor(private crud:CrudService, private router:Router) { }

  ngOnInit() {
    alert(environment.ID_USER)
    
  }
  
  registerForm(){
    var nombre = this.nombre;
    var numero = this.numero;
    var tipo = this.tipo;
    if (environment.ID_USER != ""){
      console.log("añadido");
      environment.IS_LOGGED = true;
      environment.IS_REGISTERED = true;
      environment.NAME = nombre;
      this.crud.addRegistro(environment.ID_USER,nombre,numero,tipo)
      this.router.navigate(['bienvenida'])
    }
    else if (environment.IDENTIFIER == "") {
      alert("no hay identificador: " + environment.IDENTIFIER)
      this.router.navigate(['login'])
    }
    else {
      alert("que a pasao")
      
    }
  }
  
  
}
