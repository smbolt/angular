import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkConfigService } from './services/framework-config.service';
import { ScreenService } from './services/screen.service';
import { SpaFxBodyComponent} from './spafx-body/spafx-body.component';
import { SpaFxContentComponent} from './spafx-content/spafx-content.component'; 
import { SpaFxTitleBarComponent} from './spafx-title-bar/spafx-title-bar.component';
import { SpaFxTopBarComponent } from './spafx-top-bar/spafx-top-bar.component';
import { SpaFxStatusBarComponent } from './spafx-status-bar/spafx-status-bar.component';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpaFxBodyComponent,
    SpaFxContentComponent,
    SpaFxTitleBarComponent,
    SpaFxTopBarComponent,
    SpaFxStatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  providers:[
    FrameworkConfigService,
    ScreenService
  ],
  exports: [
    SpaFxBodyComponent
  ]
})
export class SpafxModule { }