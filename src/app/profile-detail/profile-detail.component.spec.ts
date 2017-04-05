import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing/';

import { ProfileDetailComponent } from './profile-detail.component';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

describe('ProfileDetailComponent', () => {
  let component: ProfileDetailComponent;
  let fixture: ComponentFixture<ProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailComponent ],
      providers: [ ProfileService ],
      imports: [ MaterialModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ProfileDetailComponent', () => {
    expect(component).toBeTruthy();
  });
});
