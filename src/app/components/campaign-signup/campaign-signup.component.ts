import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { ContactFormField } from 'src/app/models/contact-form-field';
import { SignupFormService } from 'src/app/services/signup-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-campaign-signup',
  templateUrl: './campaign-signup.component.html',
  styleUrls: ['./campaign-signup.component.scss']
})
export class CampaignSignupComponent implements OnInit {
  @Output() submitButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  public formFields: ContactFormField[];
  public form: FormGroup;

  constructor(private campaignService: CampaignService, private signUpFormService: SignupFormService) { }

  ngOnInit(): void {
    this.campaignService.getSignupForm().subscribe(res => {
      console.log(res);
      this.formFields = res;
      this.form = this.signUpFormService.toFormGroup(this.formFields);
    });
  }

  public submitForm(): void {
    this.campaignService.saveContact(this.formFields, this.form).subscribe(contactResponse => {
      console.log(contactResponse);
      this.campaignService.addContactToCampaign(contactResponse).subscribe(updateResponse => {
        console.log(updateResponse);
        this.submitButtonClicked.emit(true);
      })
    })
  }

}
