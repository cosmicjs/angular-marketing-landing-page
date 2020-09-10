import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public campaignTitle = 'Campaign Title Goes Here';
  public showSignupForm = false;
  public formSubmitted = false;
  public campaign;

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getCampaignData().subscribe(res => this.campaign = res);
  }

  public handleSignupButtonClick(value): void {
    this.showSignupForm = value;
  }

  public showThankYou(value): void {
    this.formSubmitted = value;
  }

}
