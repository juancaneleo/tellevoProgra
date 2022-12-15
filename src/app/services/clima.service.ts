import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  

  constructor(private http: HttpClient, private geolocation: Geolocation) { 
      this.location()
  }
  
  apikey = "d1c40db400daca2360d75829a0632933"


  location(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lon = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  lat: any;
  lon: any;

  api(){
    this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?lat=" + this.lat + "&lon=" + this.lon + "&appid=" + this.apikey).subscribe(res => {
      console.log(this.lon, this.lat);
      console.log(res.name);
      return res
   })
  }

     
}
