import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Product} from "../model/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input('product')
  product!: Product

  @Output()
  out = new EventEmitter<string>();

  @HostListener('click')
  displayProduct() {
    this.out.emit(this.product.name)
  }
}
