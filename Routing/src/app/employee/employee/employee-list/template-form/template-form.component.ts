import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  form = {
    name: '',
    email: '',
    password: '',
    department: '',
    username: '',
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void{
    form.reset();
  }
}

