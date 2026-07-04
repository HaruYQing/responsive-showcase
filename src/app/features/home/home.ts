import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from '../../core/data/mock-products';
import { ProductGrid } from '../../shared/product-grid/product-grid';

@Component({
  selector: 'app-home',
  imports: [ProductGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  productList = MOCK_PRODUCTS;
}
