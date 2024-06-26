import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  products: Product[] | undefined;
  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    }
}
