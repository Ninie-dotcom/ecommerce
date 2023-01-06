import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductHttpService} from "../services/product-http.service";

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit{

  product!: Product

  confirm: boolean =  false;

  constructor(private httpProduct: ProductHttpService, private activatedRoute: ActivatedRoute, private productHttpService: ProductHttpService, private router: Router) {}

  ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.productHttpService.findById(Number(id))
      .subscribe(p => this.product = p )
  }

  deleteProduct(p: Product) {
    let id = this.product.id
    this.httpProduct.remove(Number(id))
      .subscribe(value => this.router.navigateByUrl('/products'))
  }


  confirmRemove(): boolean {
    this.confirm = true;
  return this.confirm
  }

  notConfirmRemove(): boolean {
    this.confirm = false;
    return this.confirm
  }
}
