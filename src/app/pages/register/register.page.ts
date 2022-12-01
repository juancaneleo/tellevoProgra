import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  mail: string;
  pass: string;

  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
  }
  

  register():void{
    var mail = this.mail;
    var contra = this.pass;
    this._auth.registro(mail, contra).then(res=>{
      console.log(res);
      if (res) {
        this._router.navigate(['login']);
      }
    });
  }

}
