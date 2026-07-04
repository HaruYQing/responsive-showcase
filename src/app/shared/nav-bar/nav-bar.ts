import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointService } from '../../core/services/breakpoint.service';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  breakpointService = inject(BreakpointService);
  isMenuOpen = signal(false);

  navItems = ['首頁', '商品介紹', '保戶專區', '關於我們'];

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }
}
