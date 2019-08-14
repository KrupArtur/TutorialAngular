import { Directive, OnInit, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnswer]'
})
export class AnswerDirective implements OnInit {

  @Input() correctlyAnswer: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const li = this.el.nativeElement;
    this.renderer.setStyle(li, 'style.background-color', '#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.correctlyAnswer);
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('test');
  }

}
