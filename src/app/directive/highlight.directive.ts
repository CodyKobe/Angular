import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @Input('appHighlight')
  public highlightColor: string;

  @Input()
  public hoverColor = 'cyan';

  // constructor(private el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'yellow';
  // }

  @HostBinding('style.backgroundColor')
  public backgroundColor: string;

  // constructor() {
  //   this.backgroundColor = 'lime';
  // }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.backgroundColor = this.highlightColor;
  }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
