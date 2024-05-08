import { Injectable } from '@angular/core';
import {ProductsService} from "./products.service";
import {Product} from "./product";

@Injectable()
export class ProductViewService {
  private product: Product | undefined;
  constructor(private productsService: ProductsService) { }

  getProduct(id: number) : Product | undefined {
    if (!this.product) {
      this.product = this.productsService.getProducts()[id];
    }
    return this.product;
  }
}
