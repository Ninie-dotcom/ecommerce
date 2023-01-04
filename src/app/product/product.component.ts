import { Component } from '@angular/core';
import {Product} from "../model/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
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
}
