import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'basic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  username = 'Add username';
  myForm: FormGroup;
  myValue: any = {};
  initialValue: any = {};
  list= [
    {"value":"opt-1","label":"Jakarta"},
    {"value":"opt-2","label":"Stockholm"},
    {"value":"opt-3","label":"Barcelona"}
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    // Dropdown
    
    this.initialValue= this.list[0];
    this.myValue = this.initialValue;

    //Formcontrol
    this.myForm = this.fb.group({
      username: '',
      textarea: '',
      customInput: 'Default value',
      CustomCheck: true,
      CustomDropdown:''
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

  onSubmit(...formTest){
    console.log(formTest)
  }
  clickEvent() {
    console.log('click')
    const input = document.querySelector('sdds-textfield');
  }
  logNgModel(model) {
    console.log('Change:',model.viewModel, model)
  }

  logInput(model){
    console.log('Input:',model.viewModel, model)
  }
}

@Directive({
  selector: 'sdds-drodpown',
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