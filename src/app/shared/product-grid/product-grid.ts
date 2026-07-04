import { Component, input } from '@angular/core';
import { ProductCard, Product } from '../product-card/product-card';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})
export class ProductGrid {
  products = input.required<Product[]>();
}
