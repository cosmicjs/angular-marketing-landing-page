import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { ContactFormField } from 'src/app/models/contact-form-field';

@Component({
  selector: 'app-campaign-signup',
  templateUrl: './campaign-signup.component.html',
  styleUrls: ['./campaign-signup.component.scss']
})
export class CampaignSignupComponent implements OnInit {
  @Output() submitButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  public formFields: ContactFormField[];

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getSignupForm().subscribe(res => {
      console.log(res);
      this.formFields = res;
    });
  }

  public submitForm(): void {
    this.submitButtonClicked.emit(true);
  }

}
