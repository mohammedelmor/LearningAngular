import {Component} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  today = new Date();
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor() {
    const names = ['Webcam', 'Microphone', 'Wireless keyboard', 'Apple', 'Zebra'];
    for (let name of names) {
      this.products?.push({name: name, price: name.length * 1.5})
    }
  }

  onBuy(name: string) {
    alert(`You have bought ${name}`)
  }
}
