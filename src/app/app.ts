import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterSection } from './shared/footer-section/footer-section';
import { NavBar } from './shared/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, FooterSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
