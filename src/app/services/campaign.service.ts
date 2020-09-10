import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/config/config';
import { Campaign } from '../models/campaign';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  public campaign;
  private campaignName = 'my-first-campaign';

  constructor(private http: HttpClient) {
  }

  public getCampaignData(): Observable<Campaign> {
    return this.http.get<any>(config.cosmicUrl + config.bucketSlug + '/object/' + this.campaignName, {
      params: {
        read_key: config.readKey
      }
    }).pipe(
      map(data => (
        {
          slug: data.slug,
          title: data.title,
          content: data.content,
          pageTitle: data.metadata.page_title,
          headline: data.headline,
          signupMessage: data.metadata.sign_up_message,
          thankYouMessage: data.metadata.thank_you_message,
          heroImageUrl: data.metadata.hero_image.url,
          materials: null
        }
      )
    ));
  }
}
