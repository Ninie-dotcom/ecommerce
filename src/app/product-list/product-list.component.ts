import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.model";
import {ProductHttpService} from "../services/product-http.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productClicked!: Product;
  selected: boolean = true;

  actionAdd: boolean = false;
  retrieveDataFromProduct(p: Product) {
    this.productClicked = p
    this.selected = false
  }

  close() {
    this.selected = true
  }



  products: Product[] = []

  ngOnInit(): void {
    this.httpProduct.findall()
      .subscribe(val => this.products = val)
  }

  displayForm(): boolean {
    this.actionAdd = true
    return this.actionAdd
  }

  constructor(private httpProduct: ProductHttpService) {  }


}
