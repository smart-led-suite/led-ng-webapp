import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Led }                      from '../led';


import 'rxjs/add/operator/switchMap';

import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  //only one Profile object (the one we want to view)
  profile: Profile;
  leds: Led[];

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.leds = [
       {
      name: 'led2',
      id: 1,
      brightness: 0
    },
    {
      name: 'led3',
      id: 2,
      brightness: 0
    },
    {
       name: 'led1',
      id: 0,
      brightness: 70
    }
    ];
/*    ;
     this.leds[1] =;
     this.leds[2] = ;*/

   }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.profileService.getProfile(+params['id']))
        .subscribe(profile => this.profile = profile);    
  }
  //TODO: prevent leaving the app via back button
  goBack(): void {
    this.location.back();
  }
  sliderChange(led: Led): void {
    console.log(led.name);
    console.log(led.brightness);
    
  }
}
