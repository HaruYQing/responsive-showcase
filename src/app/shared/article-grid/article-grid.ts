import { BreakpointService } from './../../core/services/breakpoint.service';
import { Component, inject, input } from '@angular/core';
import { ArticleCard, Article } from '../article-card/article-card';

@Component({
  selector: 'app-article-grid',
  imports: [ArticleCard],
  templateUrl: './article-grid.html',
  styleUrl: './article-grid.scss',
  host: {
    '[class.--side-p-80]': 'breakpointService.isDesktop()',
    '[class.--side-p-40]': 'breakpointService.isTablet()',
    '[class.--side-p-16]': 'breakpointService.isMobile()',
  },
})
export class ArticleGrid {
  breakpointService = inject(BreakpointService);

  title = input.required<string>();
  articles = input.required<Article[]>();
}
