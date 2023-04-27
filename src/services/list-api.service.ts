import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Products } from 'src/app/models/producs.model';
@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  constructor(private http:HttpClient) {}
  getData(){
    let x = "https://fakestoreapi.com/products";
    return this.http.get(x);
  }
  getProduct(id: string){
    return this.http.get<Products>("https://fakestoreapi.com/products/"+id);
  }

}
