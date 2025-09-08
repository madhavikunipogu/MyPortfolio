import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnVisible]',
  standalone: false
})
export class AnimateOnVisibleDirective implements AfterViewInit {
  @Input() targetWidth: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(this.el.nativeElement, 'width', this.targetWidth + '%');
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 1.0 });

    observer.observe(this.el.nativeElement);
  }
}

