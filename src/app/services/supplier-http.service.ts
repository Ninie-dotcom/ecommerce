import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {Supplier} from "../model/supplier.module";

@Injectable({
  providedIn: 'root'
})
export class SupplierHttpService {
  url = 'http://localhost:8080/learn/api/suppliers'

  constructor(private http: HttpClient) { }

  findAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.url)
  }

}
