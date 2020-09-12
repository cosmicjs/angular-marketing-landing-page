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
  public loading = true;

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getCampaignData().subscribe(res => {
      console.log(res);
      this.campaign = res;
      this.loading = false;
    });
  }

  public handleSignupButtonClick(value): void {
    this.showSignupForm = value;
  }

  public showThankYou(value): void {
    this.formSubmitted = value;
  }

}
