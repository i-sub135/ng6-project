import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KendaraanService {

  constructor( private http : HttpClient ) { }

  getData(){
    return this.http.get('https://api.myjson.com/bins/8wycg')
  }
}
