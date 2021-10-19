import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// https://angular.io/api/forms/ControlValueAccessor

@Component({
  selector: 'custom-input',
  templateUrl: './input-component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInput),
      multi: true,
    },
  ],
})
export class CustomInput implements ControlValueAccessor {
  value: string;
  onChange: (value: string) => {};
  onTouched: () => {};
  onDisabled: boolean;
  constructor() {}
  writeValue(value: string) {
    this.value = value ? value : '';
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean) {
    this.onDisabled = isDisabled;
  }

  handleInput(event) {
    this.onChange(event.target.value);
  }
}
