import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product1: Product = {
    name: "product1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 201,
    category: "health",
    price: 20,
    promo: 10,
    active: false
  }

  product2: Product = {
    name: "product2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 206,
    category: "home",
    price: 40,
    promo: 50,
    active: true
  }

  product3: Product = {
    name: "product3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 208,
    category: "Music",
    price: 120,
    promo: 20,
    active: true
  }

  private products =  [this.product1, this.product2, this.product3]

  constructor() { }




}
