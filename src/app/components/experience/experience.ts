import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements AfterViewInit {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkBlocks();
    window.addEventListener('scroll', () => this.checkBlocks());
  }

  checkBlocks() {
    if (!isPlatformBrowser(this.platformId)) return;

    const elements = document.querySelectorAll('.block');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        el.classList.add('show');
      }
    });
  }

}
