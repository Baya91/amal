import {
  CommonModule,
  isPlatformBrowser,
} from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';

// تعريف واجهات البيانات
interface Notremenuhome {
  image: string;
  title: string;
  link: string;
}

interface SurgeleHome {
  image: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-coursal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './coursal.component.html',
  styleUrls: ['./coursal.component.css']
})
export class CoursalComponent implements AfterViewInit {

  // الوصول للعناصر في الـ DOM
  @ViewChild('menuScrollContainer', { static: true }) menuScrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('surgeleScrollContainer', { static: true }) surgeleScrollContainer!: ElementRef<HTMLDivElement>;

  // متغيرات التحكم في عرض أزرار التمرير
  showMenuButtons: boolean = false;
  showSurgeleButtons: boolean = false;

  // بيانات قائمة "Notre Menu"
  notremenuhome: Notremenuhome[] = [
    { image: './assets/img/Notremenuhome/menu01.webp', title: 'Plats 01', link: '/page1' },
    { image: './assets/img/Notremenuhome/menu02.webp', title: 'Plats 02', link: '/page2' },
    { image: './assets/img/Notremenuhome/menu03.webp', title: 'Plats 03', link: '/page3' }
  ];

  // بيانات قائمة "Surgele"
  surgeleHome: SurgeleHome[] = [
    { image: './assets/img/surgeleHome/item01.webp', title: 'Plats 01', link: '/page1' },
    { image: './assets/img/surgeleHome/item02.webp', title: 'Plats 02', link: '/page2' },
    { image: './assets/img/surgeleHome/item03.webp', title: 'Plats 03', link: '/page3' },
    { image: './assets/img/surgeleHome/item04.webp', title: 'Plats 04', link: '/page1' },
    { image: './assets/img/surgeleHome/item05.webp', title: 'Plats 05', link: '/page2' },
    { image: './assets/img/surgeleHome/item06.webp', title: 'Plats 06', link: '/page3' }
  ];

  // التأكد من أننا في المتصفح
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // التأكد من أن الكود يعمل فقط على المتصفح
    if (isPlatformBrowser(this.platformId)) {
      this.checkScrollButtonsVisibility();
      window.addEventListener('resize', () => this.checkScrollButtonsVisibility());
    }
  }

  // التحقق من ضرورة إظهار أزرار التمرير
  public checkScrollButtonsVisibility(): void {
    if (isPlatformBrowser(this.platformId)) {
      const menuContainer = this.menuScrollContainer?.nativeElement;
      if (menuContainer) {
        this.showMenuButtons = menuContainer.scrollWidth > menuContainer.clientWidth;
      }

      const surgeleContainer = this.surgeleScrollContainer?.nativeElement;
      if (surgeleContainer) {
        this.showSurgeleButtons = surgeleContainer.scrollWidth > surgeleContainer.clientWidth;
      }
    }
  }

  // دوال تمرير قائمة "Notre Menu"
  public scrollRightMenu(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = this.menuScrollContainer.nativeElement;
    const elementWidth = this.getElementWidth(container);
    container.scrollBy({ left: elementWidth + 20, behavior: 'smooth' });
  }

  public scrollLeftMenu(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = this.menuScrollContainer.nativeElement;
    const elementWidth = this.getElementWidth(container);
    container.scrollBy({ left: -(elementWidth + 20), behavior: 'smooth' });
  }

  // دوال تمرير قائمة "Surgele"
  public scrollRightSurgele(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = this.surgeleScrollContainer.nativeElement;
    const elementWidth = this.getElementWidth(container);
    container.scrollBy({ left: elementWidth + 20, behavior: 'smooth' });
  }

  public scrollLeftSurgele(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = this.surgeleScrollContainer.nativeElement;
    const elementWidth = this.getElementWidth(container);
    container.scrollBy({ left: -(elementWidth + 20), behavior: 'smooth' });
  }

  // دالة مساعدة لحساب عرض العنصر مع الهوامش
  private getElementWidth(container: HTMLDivElement): number {
    if (!isPlatformBrowser(this.platformId)) return 0;

    const firstElement = container.querySelector('.element') as HTMLElement | null;
    if (firstElement) {
      const style = window.getComputedStyle(firstElement);
      const marginRight = parseFloat(style.marginRight);
      const marginLeft = parseFloat(style.marginLeft);
      return firstElement.offsetWidth + marginRight + marginLeft;
    }
    return 0;
  }
}
