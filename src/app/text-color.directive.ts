import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective {

  // 호스트 요소에서 프로퍼티 바인딩한 값을 전달받는다.
  @Input() color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
