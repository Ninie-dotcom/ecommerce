import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

 url = 'http://localhost:8080/learn/api/products'
  constructor(private http: HttpClient) { }

  findall(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product> (`${this.url}/${id}`)
  }

  remove(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  add(p: Product): Observable<Product>  {
    return this.http.post<Product>(this.url, p);
  }
}
