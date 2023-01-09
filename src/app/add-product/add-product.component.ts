import {Component, OnInit} from '@angular/core';
import {ProductHttpService} from "../services/product-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SupplierHttpService} from "../services/supplier-http.service";
import {Supplier} from "../model/supplier.module";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{

  myForm!: FormGroup
  formSubmitted: boolean = false
  suppliers: Supplier[] = []

  ngOnInit(): void {

    this.myForm = this.form.group( {
      name: ['' , Validators.required],
      category: ['' , Validators.required],
      price: ['' , [Validators.min(1), Validators.required]],
      promo: 60,
      description: ['' , [Validators.minLength(10), Validators.required]],
      active: true,
      supplier: this.form.group ({
        id:['']
      })
    }, { updateOn: "submit" })
    this.supplierHttp.findAllSuppliers()
      .subscribe(value => this.suppliers = value)
  }

  addProduct(): void {
    this.formSubmitted = true
    if (this?.myForm?.valid) {
      this.productHttp.add(this.myForm?.value)
        .subscribe(() => this.message.sendMessage())
      this.myForm?.reset()
      this.formSubmitted = false
    }
  }
  constructor(private message: MessageService,
              private supplierHttp: SupplierHttpService,
              private router: Router,
              private productHttp: ProductHttpService,
              private form: FormBuilder) {
  }
}
