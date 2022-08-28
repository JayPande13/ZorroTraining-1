import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url:string=" http://localhost:3000/form"
  constructor(private http:HttpClient) { 
    
  }
  getdata():Observable<any>{
    return this.http.get(`${this.url}`)
  }
  savedata(data:any):Observable<any>{
    return this.http.post(`${this.url}`,data)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
}
