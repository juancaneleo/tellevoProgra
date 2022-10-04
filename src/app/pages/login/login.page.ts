import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pageTitle = 'login';
  isNotHome = true;

  user : any = {
      name : '',
      password : ''
  }

  field: string = '';


  constructor(private toastCtrl: ToastController, private router: Router) {

  }

  ngOnInit() {
  }

  login(){
      if(this.validateModel(this.user)){
      this.presentToast('Bienvenido ' + this.user.name);
      this.router.navigate(['/bienvenida']);
    }
    else{
      this.presentToast('Debes ingresar: ' + this.field);
    }
  }


  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:3000
    });
    toast.present();
  }


}


