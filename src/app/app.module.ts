import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { NavigationPageService } from '../providers/navigation-service/navigation-page-service';
import { SettingsService } from '../providers/settings-service/settings-service';

@NgModule({
  declarations: [
    MyApp,
    MenuPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage
  ],
  providers: [
    NavigationPageService,
    SettingsService,
  ]
})
export class AppModule {}
