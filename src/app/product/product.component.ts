import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Product} from "../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input('product')
  product!: Product

  @Output()
  out = new EventEmitter<Product>();

  @HostListener('click')
  displayProduct() {
    //this.out.emit(this.product)
    this.router.navigate(['/products', this.product.id])
  }

  constructor(private router: Router) {  }

}
