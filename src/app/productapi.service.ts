import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  base_url="https://dummyjson.com/";
  constructor(private http: HttpClient) {}
  users(url:string){
    return this.http.get(this.base_url+url);
  }
  delete(url:string,id:any){
    return this.http.delete(this.base_url+url+id);
  }
  saveUsers(url:string,data:any){
    return this.http.post(this.base_url+url,data);
  }
  update(url:string,id:any,data:any){
    return this.http.put(this.base_url+url+id,data);
  }
}
