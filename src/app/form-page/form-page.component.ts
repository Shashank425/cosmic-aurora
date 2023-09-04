import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {

  cosmicForm: FormGroup;
  isChecked: boolean;

  constructor(){
    this.cosmicForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
    this.isChecked = false;
  }

  ngOnInit(){

  }

  saveFormData(){
    
  }
}
