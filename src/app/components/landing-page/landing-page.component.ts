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

  public handleSignupButtonClick($event): void {
    this.showSignupForm = $event.value;
  }

  public showThankYou($event): void {
    this.formSubmitted = $event.value;
  }

}
