import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CampaignDisplayComponent } from './components/campaign-display/campaign-display.component';
import { CampaignSignupComponent } from './components/campaign-signup/campaign-signup.component';
import { CampaignThankyouComponent } from './components/campaign-thankyou/campaign-thankyou.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormFieldInputComponent } from './components/campaign-signup/form-field-input/form-field-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignDisplayComponent,
    CampaignSignupComponent,
    CampaignThankyouComponent,
    LandingPageComponent,
    FormFieldInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
