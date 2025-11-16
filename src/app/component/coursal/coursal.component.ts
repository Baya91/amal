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
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
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
  price:string;
}
interface Review {
  name: string;
  title: string;
  text: string;
  rating: number; // 4 or 5
}

interface PlatFuturist {
  image: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-coursal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './coursal.component.html',
  styleUrls: ['./coursal.component.css'],
    encapsulation: ViewEncapsulation.None 
})
export class CoursalComponent implements AfterViewInit   {

  // الوصول للعناصر في الـ DOM
  @ViewChild('menuScrollContainer', { static: true }) menuScrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('surgeleScrollContainer', { static: true }) surgeleScrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('platFuturistContainer', { static: true }) platFuturistContainer!: ElementRef<HTMLDivElement>;
  

  // متغيرات التحكم في عرض أزرار التمرير
  showMenuButtons: boolean = false;
  showSurgeleButtons: boolean = false;
showplatFuturistButtons: boolean = false;
  // بيانات قائمة "Notre Menu"
  notremenuhome: Notremenuhome[] = [
    { image: './assets/img/Notremenuhome/menu01.png', title: 'Bastilla', link: '/page1' },
    { image: './assets/img/Notremenuhome/menu02.png', title: ' Pain Batbout', link: '/page2' },
{ image: './assets/img/futurPro/1.png', title:'Delices', link: '/page1' },
  ];

  platFuturist: PlatFuturist[] = [
      
    { image: './assets/img/futurPro/2.png', title: 'Tajin', link: '/page2' },
    { image: './assets/img/futurPro/3.png', title: 'Baghrir', link: '/page3' },
    { image: './assets/img/futurPro/4.png', title: 'soupe de Harira', link: '/page1' },
    { image: './assets/img/futurPro/5.png', title: 'Pan Batbot', link: '/page2' },
    { image: './assets/img/futurPro/6.png', title: 'Delices', link: '/page3' }
  ];
  // بيانات قائمة "Surgele"
  surgeleHome: SurgeleHome[] = [
    { image: './assets/img/glass/1.png', title:'Mini Pastilla andalouse–6 mini–Bœuf, olives & citron confit', link: '/page1',price:'10.99'},
     { image: './assets/img/glass/2.png', title: 'Mini Pastillas au poulet–6 mini', link: '/page1',price:'9.10' },
      { image: './assets/img/glass/3.png', title: 'Mini Pastilla royale–6 mini–Bœuf, amandes & oignons caramélisés', link: '/page1',price:'10.99' },
       { image: './assets/img/glass/4.png', title: ' Mini Pastillas au poisson–6 mini', link: '/page1',price:'8.99' },
          { image: './assets/img/glass/6.png',title: 'Pops crémeux au poulet–8 pièces', link: '/page1' ,price:'9.50'}, 
       { image: './assets/img/glass/5.png', title: 'Briouates aux crevettes–12 pièces', link: '/page1' ,price:'15.50'},

  ];

  // التأكد من أننا في المتصفح
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
/**

gAfterViewInit(): void {
    // التأكد من أن الكود يعمل فقط على المتصفح
    if (isPlatformBrowser(this.platformId)) {
      this.checkScrollButtonsVisibility();
      window.addEventListener('resize', () => this.checkScrollButtonsVisibility());
    }
  }
 */
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

        const platFuturistContainer = this.platFuturistContainer?.nativeElement;
      if (platFuturistContainer) {
        this.showplatFuturistButtons = platFuturistContainer.scrollWidth > platFuturistContainer.clientWidth;
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

  // دوال تمرير قائمة "showplatFuturist"
  public scrollRightPlatFuturist(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = this.platFuturistContainer.nativeElement;
    const elementWidth = this.getElementWidth(container);
    container.scrollBy({ left: elementWidth + 20, behavior: 'smooth' });
  }

  public scrollLeftPlatFuturist(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = this.platFuturistContainer.nativeElement;
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

  /********************************************  */

  
  imagesTextList = [
  {
    image: '../../../assets/img/amalHome/1.png',
   
    text: `
        <p class="txt-card">
        <span class="txt-gra">DÉLICESDORÉS</span>, avec une équipe 100 % marocaine, riche en expérience et en professionnalisme, propose des recettes maîtrisées alliant authenticité marocaine et créativité moderne. Nous soignons chaque détail, des ingrédients à la présentation, pour offrir une expérience gustative unique et une qualité inégalée, où créativité et précision se rencontrent dans chaque plat pour satisfaire les plus fins palais.
      </p>
    `
  },
  {
    image: '../../../assets/img/amalHome/2.png',
      text: `
        <p class="txt-card">
        Nous transformons chaque expérience culinaire en un voyage unique aux saveurs authentiques du Maroc, en apportant notre savoir-faire marocain en France, où <span class="txt-gra">DÉLICESDORÉS</span> propose des recettes alliant tradition et créativité moderne. Nous soignons chaque détail, des ingrédients à la présentation,
        pour offrir une expérience gustative inoubliable alliant goût et élégance. </p>
    `
    
  },
  {
    image: '../../../assets/img/amalHome/3.png',
   
   text: `
      <p class="txt-card">
         Nous créons des expériences culinaires marocaines authentiques pour chaque occasion, où les saveurs traditionnelles se marient à une présentation élégante.
<br><span class="txt-gra">Buffets raffinés</span> : des compositions innovantes alliant authenticité et créativité.
<br><span class="txt-gra">Hors-d'œuvre de prestige </span>: des touches raffinées pour chaque événement ou cocktail.
Chaque plat éveille les sens et laisse une impression inoubliable de goût et d’élégance.
 </p>
  `
  }
];


  activeIndex = 0;

  @ViewChildren('textBlock') textBlocks!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
      this.checkScrollButtonsVisibility();
      window.addEventListener('resize', () => this.checkScrollButtonsVisibility());
    }


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            this.activeIndex = index;
          }
        });
      },
      { threshold: 0.5 } // البلوك يعتبر "نشط" عندما يكون نصفه مرئي
    );

    this.textBlocks.forEach(block => observer.observe(block.nativeElement));
  }

  /************************Review*************************   */
ratings = [
  { name: 'Claire A.', rating: 5, title: 'Excellent', comment: 'La bastilla au poulet est délicieuse et croustillante.' },
  { name: 'Rachid M.', rating: 5, title: 'Parfait', comment: 'Le goût du poisson est exquis, avec une texture parfaite et équilibrée, vraiment savoureux.' },
  { name: 'Sophie L.', rating: 5, title: 'Délicieux', comment: 'J’adore le pain almamer, très savoureux et croustillant.' },
  { name: 'Yasmine F.', rating: 5, title: 'Super', comment: 'Le baghrir est léger, moelleux et parfait avec du miel naturel.' },
  { name: 'Amine B.', rating: 5, title: 'Très bon', comment: 'Bastilla au poulet avec épices équilibrées, un vrai plaisir pour les amateurs de saveurs intenses et raffinées.' },
  { name: 'Omar L.', rating: 4, title: 'Très bon', comment: 'Le baghrir est bon mais légèrement sec, parfait avec miel.' },
  { name: 'Paul N.', rating: 4, title: 'Bon', comment: 'Bastilla au poulet agréable mais un peu légère pour mon appétit.' },
  { name: 'Nadia C.', rating: 5, title: 'Magnifique', comment: 'La bastilla au poisson était fraîche, savoureuse et j’en commanderai encore sans hésiter.' },
  { name: 'Leïla R.', rating: 5, title: 'Parfait', comment: 'Le pain almamer croustillant dehors, moelleux dedans, excellent pour tout repas.' },
  { name: 'Hugo D.', rating: 5, title: 'Délicieux', comment: 'Baghrir marocain très léger et aérien, idéal pour le petit-déjeuner gourmand.' },
  { name: 'Meryem K.', rating: 5, title: 'Excellent', comment: 'Bastilla au poulet avec amandes dorées, goût exquis et parfaitement équilibré.' },
  { name: 'Jérôme P.', rating: 5, title: 'Super', comment: 'Bastilla au poisson, un vrai régal pour les papilles.' },
  { name: 'Mélanie D.', rating: 4, title: 'Très bon', comment: 'Pain almamer correct, croustillant mais pourrait être plus savoureux.' },
  { name: 'Fatima Z.', rating: 5, title: 'Parfait', comment: 'Le pain almamer très savoureux, frais et parfait pour accompagner tout repas.' },
  { name: 'Karim H.', rating: 5, title: 'Délicieux', comment: 'Baghrir moelleux, léger et délicieux, parfait avec miel et beurre traditionnel.' },
  { name: 'Amélie G.', rating: 5, title: 'Superbe', comment: 'La bastilla au poulet incroyablement croustillante, délicieuse et très parfumée, un vrai délice.' },
  { name: 'Salma N.', rating: 5, title: 'Excellent', comment: 'J’ai adoré le goût unique de la bastilla, parfaitement épicée.' },
  { name: 'Karim A.', rating: 4, title: 'Bon', comment: 'Le baghrir était bon, mais un peu trop sucré pour moi.' },
  { name: 'Luc D.', rating: 5, title: 'Magnifique', comment: 'Le pain almamer est authentique, savoureux, avec texture parfaite et équilibrée.' },
  { name: 'Nora B.', rating: 5, title: 'Parfait', comment: 'Baghrir léger et moelleux, parfait avec un peu de beurre et miel.' }
];


  @ViewChild('testimonialContainer', { static: true }) testimonialContainer!: ElementRef<HTMLDivElement>;

scrollRightTestimonials(): void {
  const container = this.testimonialContainer.nativeElement;
  const scrollAmount = container.offsetWidth; // scroll بحجم العرض الكامل
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

scrollLeftTestimonials(): void {
  const container = this.testimonialContainer.nativeElement;
  const scrollAmount = container.offsetWidth;
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

   
}
