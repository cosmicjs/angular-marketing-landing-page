import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-display',
  templateUrl: './campaign-display.component.html',
  styleUrls: ['./campaign-display.component.scss']
})
export class CampaignDisplayComponent implements OnInit {
  @Output() signupButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public heroImage = '';
  public campaignDetails = 'This is some information about the campaign and the organization. Some directions about signing up. Other things like that.';
  constructor() { }

  ngOnInit(): void {
  }

  public buttonClicked(): void {
    this.signupButtonClicked.emit(true);
  }

}
