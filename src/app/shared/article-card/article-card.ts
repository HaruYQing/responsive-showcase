import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface Article {
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
}

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss',
})
export class ArticleCard {
  article = input.required<Article>();
}
