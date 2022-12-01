import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "@firebase/app-compat";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

 
  constructor(private _auth : AngularFireAuth) { }


  async login(email: string, password: string){
    try{
        return await this._auth.signInWithEmailAndPassword(email, password);
    }
    catch(error) {
        alert("No se ha podido hacer el log-in correctamente. Error: " + error)
        console.log("No se ha podido hacer el log-in correctamente. Error: " + error);
        return null;
    }
  }
  
  async registro(email: string, password: string){
    try{
        return await this._auth.createUserWithEmailAndPassword(email, password);
    }
    catch(error) {
        alert("No se ha podido hacer el registro correctamente. Error: " + error)
        console.log("No se ha podido hacer el registro correctamente. Error: " + error);
        return null;
    }
  }
  
  async logOut(){
    this._auth.signOut();
 }

 
}

