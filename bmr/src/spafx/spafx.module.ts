import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkConfigService } from './services/framework-config.service';
import { ScreenService } from './services/screen.service';
import { FrameworkBodyComponent} from './framework-body/framework-body.component';
import { SpaFxContentComponent} from './spafx-content/spafx-content.component'; 
import { TitleBarComponent} from './title-bar/title-bar.component';
import { SpafxTopBarComponent } from './spafx-top-bar/spafx-top-bar.component';
import { SpafxStatusBarComponent } from './spafx-status-bar/spafx-status-bar.component';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    SpaFxContentComponent,
    TitleBarComponent,
    SpafxTopBarComponent,
    SpafxStatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  providers:[
    FrameworkConfigService,
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class SpafxModule { }