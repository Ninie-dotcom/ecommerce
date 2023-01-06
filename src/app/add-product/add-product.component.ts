import {Component, OnInit} from '@angular/core';
import {ProductHttpService} from "../services/product-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{

  myForm!: FormGroup

  ngOnInit(): void {
    this.myForm = this.form.group( {
      name: "Beatles",
      category: "cd",
      price: 10,
      promo: 60,
      description: "Ipsum lorem knveprnvoer fze,f",
      active: true
    })
  }

  addProduct(): void {
    this.productHttp.add(this.myForm?.value)
      .subscribe( () => this.router.navigateByUrl('/products'))
  }

  constructor(private router: Router, private productHttp: ProductHttpService, private form: FormBuilder) {
  }
}
