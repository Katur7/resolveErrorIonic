import { Injectable } from '@angular/core';

import { SettingsService } from '../';

@Injectable()
export class NavigationPageService {
  constructor(
    private settings: SettingsService,
  ) {}
}
