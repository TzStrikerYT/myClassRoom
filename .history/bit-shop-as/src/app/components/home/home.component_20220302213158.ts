import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public productsService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productsService.getProducts().subscribe(
      (pato: any) => {
        this.productsService.products = pato
        console.log(this.productsService.products)
      }
    )
  }

}
