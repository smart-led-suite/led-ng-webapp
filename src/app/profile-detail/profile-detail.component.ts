import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

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

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.profileService.getProfile(+params['id']))
        .subscribe(profile => this.profile = profile);    
  }
  //TODO: prevent leaving the app via back button
  goBack(): void {
    this.location.back();
  }
}
