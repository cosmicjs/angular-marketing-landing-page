import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { Campaign } from 'src/app/models/campaign';

@Component({
  selector: 'app-campaign-display',
  templateUrl: './campaign-display.component.html',
  styleUrls: ['./campaign-display.component.scss']
})
export class CampaignDisplayComponent implements OnInit {
  @Input() campaign: Campaign;
  @Output() signupButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public heroImage = '';
  public campaignDetails = 'This is some default text. If you are seeing this, your campaign is missing the signup message data.';
  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.heroImage = this.campaign.heroImageUrl;
    this.campaignDetails = this.campaign.signupMessage;
  }

  public buttonClicked(): void {
    this.signupButtonClicked.emit(true);
  }

}
