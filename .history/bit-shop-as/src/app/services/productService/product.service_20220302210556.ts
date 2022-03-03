import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/productModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //selectedProduct: Product
  products: any
  url_api = `${environment.API_URL}/products`

  constructor(public http: HttpClient) {
    //this.selectedProduct = new Product()
  }

  getProducts(){
    return this.http.get(`${this.url_api}/get-products`)
  }
}