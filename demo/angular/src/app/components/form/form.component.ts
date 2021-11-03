import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'basic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  username = 'Add username';
  myForm: FormGroup;
  myValue: any = {};
  initialValue: any = {};
  list = [
    { value: 'opt-1', label: 'Jakarta' },
    { value: 'opt-2', label: 'Stockholm' },
    { value: 'opt-3', label: 'Barcelona' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Dropdown

    this.initialValue = this.list[0];
    this.myValue = this.initialValue;

    //Formcontrol
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      textarea: '',
      customInput: 'Default value',
      CustomCheck: true,
      CustomDropdown: ['', Validators.required],
      nativeDropdown: 'car',
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  onSubmit(...formTest) {
    console.log(formTest);
  }
  clickEvent() {
    console.log('click');
    const input = document.querySelector('sdds-textfield');
  }
  logNgModel(model) {
    console.log('Change:', model.viewModel, model);
  }

  logInput(model) {
    console.log('Input:', model.viewModel, model);
  }
}
