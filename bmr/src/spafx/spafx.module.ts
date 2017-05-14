import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent} from './framework-body/framework-body.component';
import { SpaFxContentComponent} from './spafx-content/spafx-content.component'; 
import { TitleBarComponent} from './title-bar/title-bar.component';
import { SpafxTopBarComponent } from './spafx-top-bar/spafx-top-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    SpaFxContentComponent,
    TitleBarComponent,
    SpafxTopBarComponent
  ],
  providers:[
    FrameworkConfigService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class SpafxModule { }