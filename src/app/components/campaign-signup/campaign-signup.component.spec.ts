import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSignupComponent } from './campaign-signup.component';

describe('CampaignSignupComponent', () => {
  let component: CampaignSignupComponent;
  let fixture: ComponentFixture<CampaignSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
