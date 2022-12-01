import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

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


  constructor(private toastCtrl: ToastController, private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet, private _auth : AuthService, private _router: Router) {

  }

  ngOnInit() {
      
      environment.IS_LOGGED = false;
      this.menu.enable(false)
      this.routerOutlet.swipeGesture = false;
  }

  
  logIn(){
    var mail = this.mail;
    var contra = this.pass;
    this._auth.login(mail, contra).then(res=> {
      console.log(res);
      if (res != null) {
        this.router.navigate(['bienvenida'])
        environment.IS_LOGGED = true;
      }
    });
  }
  
  goRegister(){
    this.router.navigate(['register'])
  }
  
  



}


