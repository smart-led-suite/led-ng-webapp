import { Component, OnInit } from '@angular/core';

import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: Profile[];
  selectedProfileId: number;

  constructor(
    private profileService: ProfileService,
  ) { 
    console.log('hey the profile got constructed');    
  }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getProfiles().then(profiles => {
      this.profiles = profiles;
      this.selectedProfileId = 0;      
    });
  }
}
