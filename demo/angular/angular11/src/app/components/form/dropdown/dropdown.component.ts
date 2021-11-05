import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// https://angular.io/api/forms/ControlValueAccessor

@Component({
  selector: 'custom-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdown),
      multi: true,
    },
  ],
})
export class CustomDropdown implements ControlValueAccessor {
  @Input() list: any;
  @Input() initialValue: any;
  @Input() myValue: any;

  value: string;
  onChange: (value: string) => void;
  onTouched: () => {};
  onDisabled: boolean;

  constructor() {
    this.onChange = (value: string) => {};
  }

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

  handleChange(event) {
    console.log(event);
    this.onChange(event.detail.label);
  }
}
