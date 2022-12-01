import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { 
    
  }

  getValores(){
    return this.http.get('https://mindicador.cl/api');
  }
}
