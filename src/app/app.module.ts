import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CampaignDisplayComponent } from './components/campaign-display/campaign-display.component';
import { CampaignSignupComponent } from './components/campaign-signup/campaign-signup.component';
import { CampaignThankyouComponent } from './components/campaign-thankyou/campaign-thankyou.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormFieldInputComponent } from './components/campaign-signup/form-field-input/form-field-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './services/app-config.service';

export function initConfig(appConfigService: AppConfigService) {
  return () => appConfigService.loadConfig();
}

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
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ AppConfigService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
