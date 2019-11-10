import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInputMask]'
})
export class InputMaskDirective {
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();

  constructor(private el: ElementRef) { }
  
  @HostListener('keyup') onMouseEnter() {
    this.el.nativeElement.setAttribute('acturalVal', this.el.nativeElement.value);
    this.valueChanged.emit(this.el.nativeElement.value);
  }

}
