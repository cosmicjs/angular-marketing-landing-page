import { Component, OnInit, Input } from '@angular/core';
import { ContactFormField } from 'src/app/models/contact-form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss']
})
export class FormFieldInputComponent implements OnInit {
  @Input() field: ContactFormField
  @Input() formGroup: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

  get isValid() {
    return this.formGroup.controls[this.field.key].valid || this.formGroup.controls[this.field.key].untouched;
  }

}
