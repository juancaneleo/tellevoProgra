import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get} from "firebase/database";


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  weatherTemp :any
  weatherDescription :any
  coordenadas :any
  latitud :any
  longitud :any
  todayDate = new Date()

  constructor(private router: Router,public httpClient:HttpClient, private geoLocation: Geolocation) {
    this.fetchLocation()
    
   }
   async fetchLocation(){
    const location = await this.geoLocation.getCurrentPosition();
      console.log('location = ', location);
      this.coordenadas = location['coords']
      this.latitud = this.coordenadas['latitude']
      this.longitud = this.coordenadas['longitude']
      console.log('latitud = ',this.latitud);
      console.log('longitud = ',this.longitud);
      this.loadData();
  }
  app: any;

  ngOnInit() {
    if (environment.IS_LOGGED == false){
      this.router.navigate(['login'])
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

  loadData(){
      this.httpClient.get(`${API_URL}/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${API_KEY}&units=metric`).subscribe(results =>{
      console.log(results);
      this.weatherTemp = results['main']
      this.weatherDescription = results['weather']
      this.weatherDescription = this.weatherDescription['0']
      console.log(this.weatherTemp);
      console.log(this.weatherDescription);
    })
  }
}