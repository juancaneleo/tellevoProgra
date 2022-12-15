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
   }

  ngOnInit() {
      setTimeout(() => {
        if(environment.RELOAD == true){
          environment.RELOAD = false
          this.router.navigate(['miviaje'])
        } else {
          this.router.navigate(['login']);
        }
    }, 1000);
    
    
  }

}
