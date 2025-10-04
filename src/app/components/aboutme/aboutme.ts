import { Component, ViewChildren, QueryList, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: false,
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css'
})
export class Aboutme implements AfterViewInit  {

    @ViewChildren('block', { read: ElementRef }) blocks!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Only run in browser
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkBlocks(); 
    window.addEventListener('scroll', () => this.checkBlocks());
  }

  checkBlocks() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.blocks.forEach(el => {
      if (!el.nativeElement.getBoundingClientRect) return;

      const rect = el.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.8) {
        el.nativeElement.classList.add('show');
      }
    });
  }
}