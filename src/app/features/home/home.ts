import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from '../../core/data/mock-products';
import { ProductGrid } from '../../shared/product-grid/product-grid';
import { MOCK_ARTICLES } from '../../core/data/mock-articles';
import { ArticleGrid } from '../../shared/article-grid/article-grid';
import { HeroSection } from '../hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, ProductGrid, ArticleGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  productList = MOCK_PRODUCTS;
  articleList = MOCK_ARTICLES;
}
