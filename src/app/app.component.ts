import { Component } from '@angular/core';

import { CoursalComponent } from './component/coursal/coursal.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomepageComponent, CoursalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app0';
}
