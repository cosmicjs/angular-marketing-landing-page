import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignThankyouComponent } from './campaign-thankyou.component';

describe('CampaignThankyouComponent', () => {
  let component: CampaignThankyouComponent;
  let fixture: ComponentFixture<CampaignThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignThankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
