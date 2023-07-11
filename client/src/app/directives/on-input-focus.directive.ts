import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appOnInputFocus]',
})
export class OnInputFocusDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.focus();
  }
}
