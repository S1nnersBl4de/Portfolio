import { Component, ViewChildren, QueryList, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements AfterViewInit  {

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
