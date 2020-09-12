import { Component, OnInit, Input } from '@angular/core';
import { ContactFormField } from 'src/app/models/contact-form-field';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss']
})
export class FormFieldInputComponent implements OnInit {
  @Input() field: ContactFormField
  constructor() { }

  ngOnInit(): void {
  }

}
