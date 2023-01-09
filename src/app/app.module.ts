import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* routes */
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'products/new', component: AddProductComponent},
  {path: 'products/:id', component: DetailsProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    DetailsProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
