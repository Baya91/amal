import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CoursalComponent } from '../coursal/coursal.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CoursalComponent,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent  {

}