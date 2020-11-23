import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
  <h4>Modal</h4>
  <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>Launch demo modal</button>

  <div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
    <div class='modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
            <span aria-hidden='true'>×</span>
          </button>
        </div>
        <div class='modal-body'>
          <p>Modal body text goes here.</p>
        </div>
        <div class='modal-footer'>
          <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
          <button type='button' class='btn btn-primary'>Save changes</button>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ModalComponent implements OnInit {
  ngOnInit() { }
}