import { Component, OnInit, Input } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { Campaign } from 'src/app/models/campaign';

@Component({
  selector: 'app-campaign-thankyou',
  templateUrl: './campaign-thankyou.component.html',
  styleUrls: ['./campaign-thankyou.component.scss']
})
export class CampaignThankyouComponent implements OnInit {
  @Input() campaign: Campaign;
  public thankYouDetails = 'This is default text. If you are seeing this, then you are missing the thank you message in your campaign.';

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.thankYouDetails = this.campaign.thankYouMessage;
  }

}
