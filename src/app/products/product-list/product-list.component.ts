import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  today = new Date();
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(name: string) {
    alert(`You have bought ${name}`)
  }
}
