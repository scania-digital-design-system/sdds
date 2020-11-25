import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
  <h4>Form</h4>
  <form>
    <div class="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div class="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `
})
export class FormComponent implements OnInit {
  ngOnInit() { }
}
