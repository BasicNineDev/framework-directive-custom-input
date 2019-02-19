import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[textColor2]'
})
export class TextColor2Directive {

  @Input('textColor2') color2: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color2);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
