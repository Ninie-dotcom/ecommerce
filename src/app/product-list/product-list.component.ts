import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.model";
import {ProductHttpService} from "../services/product-http.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productClicked!: Product;
  selected: boolean = true;

  retrieveDataFromProduct(p: Product) {
    this.productClicked = p
    this.selected = false
  }

  close() {
    this.selected = true
  }

  products: Product[] = []

  ngOnInit(): void {
    this.fetchData()
    this.message.retrieveEmitter().subscribe(() => this.fetchData())
  }

  private fetchData(){
    this.httpProduct.findall()
      .subscribe(val => this.products = val)
  }



  constructor(private message: MessageService, private httpProduct: ProductHttpService) {  }


}
