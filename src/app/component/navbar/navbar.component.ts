import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // ✅ جمع وليس مفرد
})
export class NavbarComponent implements OnInit {
  theme: 'light' | 'dark' = 'light';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      this.theme = (savedTheme === 'dark') ? 'dark' : 'light';
      this.applyTheme();
    } else {
      // إذا كان على السيرفر، لا تستخدم localStorage
      this.theme = 'light';
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.theme);
    }
    this.applyTheme();
  }

  applyTheme() {
    if (this.theme === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
