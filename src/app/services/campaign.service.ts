import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/config/config';
import { Campaign } from '../models/campaign';
import { ContactFormField } from '../models/contact-form-field';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  public campaign;
  private campaignName = 'my-first-campaign';
  private bucketSlug = config.bucketSlug;
  private cosmicUrl = config.cosmicUrl;

  constructor(private http: HttpClient) {
  }

  public getCampaignData(): Observable<Campaign> {
    return this.http.get<any>(this.cosmicUrl + this.bucketSlug + '/object/' + this.campaignName, {
      params: {
        read_key: config.readKey
      }
    }).pipe(
      map(data => (
        {
          slug: data.object.slug,
          title: data.object.title,
          content: data.object.content,
          pageTitle: data.object.metadata.page_title,
          headline: '', //data.object.metadata.headline,
          signupMessage: data.object.metadata.sign_up_message,
          thankYouMessage: data.object.metadata.thank_you_message,
          heroImageUrl: data.object.metadata.hero_image.url,
          materials: null
        }
      )
    ));
  }

  public getSignupForm(): Observable<ContactFormField[]> {
    return this.http.get<any>(this.cosmicUrl + this.bucketSlug + '/object-types', {
      params: {
        read_key: config.readKey
      }
    })
    .pipe(
      map(res => res.object_types.filter(x => x.slug === 'contacts')[0].metafields)
    );

  }
}
