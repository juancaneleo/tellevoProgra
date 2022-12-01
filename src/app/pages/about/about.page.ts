import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (environment.IS_LOGGED == false){
      if(environment.IS_LOGGED == false){
        this.router.navigate(['login'])
      }
    }
  }

}
