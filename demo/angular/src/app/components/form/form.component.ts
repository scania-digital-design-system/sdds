import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'basic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  username = 'Add username';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //Formcontrol
    this.myForm = this.fb.group({
      username: '',
      textarea: '',
      customInput: 'Default value',
      CustomCheck: true,

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