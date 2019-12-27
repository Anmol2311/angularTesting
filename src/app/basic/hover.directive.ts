import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter')onmouseenter(){
    this.elementRef.nativeElement.style.backgroundColor = "#dc3545";
    this.elementRef.nativeElement.style.cursor = "pointer";
    this.elementRef.nativeElement.style.borderRadius = "5px";
  }

  @HostListener('mouseleave')onmouseleave(){
    this.elementRef.nativeElement.style.backgroundColor = "initial";
  }

}
