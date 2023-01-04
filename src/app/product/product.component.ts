import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product1 = {
    name: "product1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
}
