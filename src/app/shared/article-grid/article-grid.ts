import { Component, input } from '@angular/core';
import { ArticleCard, Article } from '../article-card/article-card';

@Component({
  selector: 'app-article-grid',
  imports: [ArticleCard],
  templateUrl: './article-grid.html',
  styleUrl: './article-grid.scss',
})
export class ArticleGrid {
  title = input.required<string>();
  articles = input.required<Article[]>();
}
