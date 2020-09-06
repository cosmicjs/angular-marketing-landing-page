import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-thankyou',
  templateUrl: './campaign-thankyou.component.html',
  styleUrls: ['./campaign-thankyou.component.scss']
})
export class CampaignThankyouComponent implements OnInit {
  public thankYouDetails = 'Here would be the text you display to your visitors after they complete your sign up form. You might want to tell them how you will be contacting them in future or that you won\'t sell their contact information. Or that you will be happy to erase their information. And don\'t forget to thank them for signing up!';

  constructor() { }

  ngOnInit(): void {
  }

}
