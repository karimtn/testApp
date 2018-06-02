import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  getCategories(){
    return this.http.get('http://94.23.18.212:8080/api/categories?language=EN');
  }
  
}
