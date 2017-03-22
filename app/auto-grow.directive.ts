
//you can import multiple decorators in one line
import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {

  //we need these ElementRef & Renderer objects on our functions below
  //so we must include them below
  constructor(private el: ElementRef, private renderer: Renderer){

  }

  onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
  }

  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
  }

}