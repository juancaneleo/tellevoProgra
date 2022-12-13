import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pageTitle = 'login';
  isNotHome = true;
  mail: string;
  pass: string;


  field: string = '';


  constructor(private toastCtrl: ToastController, private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet, private _auth : AuthService, private _router: Router, private crud: CrudService) {

  }

  ngOnInit() {
      
      environment.IS_LOGGED = false;
      this.menu.enable(false)
      this.routerOutlet.swipeGesture = false;
  }

  
  logIn(){
    var mail = this.mail;
    var contra = this.pass;
    var mailenv = mail.replace(".","").replace(".","").replace("@","")
    this._auth.login(mail, contra).then(res=> {
      console.log(res);
      if (res != null) {
        environment.IS_LOGGED = true;
        environment.IDENTIFIER = mailenv;
        this.router.navigate(['bienvenida'])
      }
    });
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        environment.ID_USER = uid;
        
      } else {
        console.log("no hay id");
        
      }
    });

  }
  
  goRegister(){
    this.router.navigate(['register'])
  }

  
  



}


