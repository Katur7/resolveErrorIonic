import { Component } from '@angular/core';

import { NavigationPageService } from '../../providers';

@Component({
  selector: 'menu-page',
  templateUrl: 'menu.html'
})
export class MenuPage {
  constructor(
              private navService: NavigationPageService,
            ) {}
}
