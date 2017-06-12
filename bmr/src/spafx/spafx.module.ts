import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaFxConfigService } from './services/spafx-config.service';
import { SpaFxScreenService } from './services/spafx-screen.service';
import { SpaFxMenuService } from './services/spafx-menu.service';
import { SpaFxBodyComponent} from './spafx-body/spafx-body.component';
import { SpaFxContentComponent} from './spafx-content/spafx-content.component'; 
import { SpaFxTitleBarComponent} from './spafx-title-bar/spafx-title-bar.component';
import { SpaFxTopBarComponent } from './spafx-top-bar/spafx-top-bar.component';
import { SpaFxStatusBarComponent } from './spafx-status-bar/spafx-status-bar.component';
import { SpaFxScreenLarge } from './directives/spafx-screen-large.directive';
import { SpaFxScreenBelowLarge } from './directives/spafx-screen-below-large.directive';

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
    SpaFxScreenLarge,
    SpaFxScreenBelowLarge
  ],
  providers:[
    SpaFxConfigService,
    SpaFxScreenService,
    SpaFxMenuService
  ],
  exports: [
    SpaFxBodyComponent
  ]
})
export class SpafxModule { }