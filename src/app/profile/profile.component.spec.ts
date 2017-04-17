import { fakeAsync, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing/';

import { ProfileComponent } from './profile.component';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { PROFILES } from '../mock-profiles';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileService: ProfileService;
  let de:      DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [ ProfileService ],
      imports: [ MaterialModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    profileService = fixture.debugElement.injector.get(ProfileService);

    let spy = spyOn(profileService, 'getProfiles')
      .and.returnValue(Promise.resolve(PROFILES))

 
    //fixture.detectChanges
  });

  it('should create ProfileComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should have profiles', async(() => {
  fixture.detectChanges();

  fixture.whenStable().then(() => { // wait for async getQuote
    fixture.detectChanges();        // update view with quote
    de = fixture.debugElement.queryAll(By.css('.profile'));
    expect(de[0].nativeElement.textContent).toContain('profile 1');
    expect(de[1].nativeElement.textContent).toContain('profile 2');
    expect(de[2].nativeElement.textContent).toContain('relax');
    expect(de[3].nativeElement.textContent).toContain('work');
    expect(de[4].nativeElement.textContent).toContain('sunset');
  });
  }));
});
