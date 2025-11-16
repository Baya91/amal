import { Component } from '@angular/core';

@Component({
  selector: 'app-images-with-text-scrolling',
  templateUrl: './images-with-text-scrolling.component.html',
  styleUrls: ['./images-with-text-scrolling.component.css']
})
export class ImagesWithTextScrollingComponent {
  imagesTextList = [
    {
      image: 'https://www.dar-lalla.com/cdn/shop/files/IMG_0371.jpg?v=1756039837',
      title: 'Catering & Buffets',
      text: `
        <p>At DAR LALLA, we bring the flavors of Morocco to your events, creating unforgettable dining experiences for every occasion.</p>
        <ul>
          <li><strong>Buffets:</strong> From vibrant Moroccan finger foods to elaborate spreads, our buffet options are designed to impress.</li>
          <li><strong>Finger Food:</strong> Perfect for cocktail parties or informal gatherings.</li>
        </ul>
      `
    },
    {
      image: 'https://www.dar-lalla.com/cdn/shop/files/IMG_0399.jpg?v=1756039848',
      title: 'Décor & Service',
      text: `
        <p>In addition to our authentic Moroccan cuisine, we provide:</p>
        <ul>
          <li><strong>Complete Event Décor:</strong> Transform your venue with Moroccan magic.</li>
          <li><strong>Professional Service:</strong> Our team ensures your guests are well taken care of.</li>
        </ul>
      `
    }
  ];

  activeItem = this.imagesTextList[0];
}
