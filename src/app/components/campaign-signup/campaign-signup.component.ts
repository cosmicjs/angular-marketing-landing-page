import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-campaign-signup',
  templateUrl: './campaign-signup.component.html',
  styleUrls: ['./campaign-signup.component.scss']
})
export class CampaignSignupComponent implements OnInit {
  @Output() submitButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.submitButtonClicked.emit(true);
  }

}
