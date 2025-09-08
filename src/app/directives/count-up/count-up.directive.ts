import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: false
})
export class CountUpDirective implements OnInit {
  @Input() endValue: number = 0;
  @Input() duration: number = 2000; 
  @Input() suffix: string = '';    
  @Input() prefix: string = '';     

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement);
  }

  private startCounting() {
    const start = 0;
    const end = this.endValue;
    const duration = this.duration;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      this.el.nativeElement.textContent = `${this.prefix}${value}${this.suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}