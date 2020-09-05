import { Component } from '@angular/core';
import { CampaignService } from './services/campaign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing-page';

  constructor(private campaignService: CampaignService) {

  }
}
