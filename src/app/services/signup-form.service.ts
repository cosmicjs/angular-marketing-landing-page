import { Injectable } from '@angular/core';
import { ContactFormField } from '../models/contact-form-field';
import { FormFieldInputComponent } from '../components/campaign-signup/form-field-input/form-field-input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  constructor() { }

  toFormGroup(fields: ContactFormField[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl('' , Validators.required)
                                        : new FormControl('');
    });

    return new FormGroup(group);
  }


}
