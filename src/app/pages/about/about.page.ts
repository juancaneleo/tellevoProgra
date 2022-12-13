import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get} from "firebase/database";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }
  app: any;

  ngOnInit() {
    if (environment.IS_LOGGED == false){
      if(environment.IS_LOGGED == false){
        this.router.navigate(['login'])
      }
    }
    
    this.app = initializeApp(environment.firebaseConfig);
      const dbRef = ref(getDatabase(this.app));
      get(child(dbRef, `usuarios/${environment.ID_USER}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("este es el wn ->");
          
          console.log(snapshot.val());


        } else {
          console.log("No data available");
          this.router.navigate(['register-form'])
        }
        
      }).catch((error) => {
        console.error(error);
      });


}
}