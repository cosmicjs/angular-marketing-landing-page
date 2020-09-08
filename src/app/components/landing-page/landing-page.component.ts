import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public campaignTitle = 'Campaign Title Goes Here';
  public showSignupForm = false;
  public formSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  public handleSignupButtonClick(value): void {
    this.showSignupForm = value;
  }

  public showThankYou(value): void {
    this.formSubmitted = value;
  }

}
