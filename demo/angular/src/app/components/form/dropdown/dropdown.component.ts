import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// https://angular.io/api/forms/ControlValueAccessor

@Directive({
  selector: 'sdds-drodpown-ng',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SddsValueAccessor, multi: true }]
})

export class SddsValueAccessor implements ControlValueAccessor {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.onChange = () => {};
    console.log('accessor')
  }

  onChange: (value: string) => void;

  writeValue(value: string) {
    this.renderer.setProperty(this.element.nativeElement, 'value', value);
  }

  @HostListener('selectOption', ['$event.detail'])
  _handleChange(value: string) {
    
    console.log('accessor')
    this.onChange(value);
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = value => {
      fn(value);
    };
  }

  registerOnTouched() {}
}