import { Injectable } from '@angular/core';

import { Profile } from './profile';
import { PROFILES } from './mock-profiles';

@Injectable()
export class ProfileService {

  constructor() { }

  getProfiles(): Promise<Profile[]> {
    return Promise.resolve(PROFILES);
  }
  //individual profile getter soon to be implemented

}
