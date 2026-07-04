import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  imports: [],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
})
export class FooterSection {
  currentYear = new Date().getFullYear();

  footerLinks = [
    { title: '關於我們', items: ['公司介紹', '徵才資訊', '公司治理'] },
    { title: '保戶服務', items: ['理賠申請', '保單查詢', '常見問答'] },
    { title: '法律資訊', items: ['隱私權政策', '服務條款', '免責聲明'] },
  ];
}
