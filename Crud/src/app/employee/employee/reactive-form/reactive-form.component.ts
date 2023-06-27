import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from '../employee-list/validation';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  tableheader = [
    {
      "id": "Id",
      "name": "Name",
      "department": "Department",
      "age": "Age",
      "salary": "Salary",
      "country": "Country",
      // "date":"Date"

    }
  ]

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
          ],
        ],

        email: [
          '',
          [
            Validators.required,
            Validators.email,
          ],
        ],

        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
          ],
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],

        confirmPassword: [
          '',
          [
            Validators.required,
          ],
        ],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    )
  }

  get f(): { [key : string]: AbstractControl}
  {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if(this.form.invalid)
    {
      return;
    }

    console.log(JSON.stringify(this.form.value, null , 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

