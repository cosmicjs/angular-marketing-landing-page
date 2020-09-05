import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDisplayComponent } from './campaign-display.component';

describe('CampaignDisplayComponent', () => {
  let component: CampaignDisplayComponent;
  let fixture: ComponentFixture<CampaignDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
