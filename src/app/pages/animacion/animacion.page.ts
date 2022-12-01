import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.page.html',
  styleUrls: ['./animacion.page.scss'],
})
export class AnimacionPage implements OnInit {

  constructor(private router: Router) {
    if (environment.IS_LOGGED == false){
      this.router.navigate(['login'])
    }
   }

  ngOnInit() {
      setTimeout(() => {
        if(environment.IS_LOGGED == false){
          this.router.navigate(['login'])
        }
        this.router.navigate(['login']);
    }, 1000);
  }

}
