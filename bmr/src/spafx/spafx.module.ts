import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent} from './framework-body/framework-body.component';
import { SpaFxContentComponent} from './spafx-content/spafx-content.component'; 
import { TitleBarComponent} from './title-bar/title-bar.component';
import { SpafxTopBarComponent } from './spafx-top-bar/spafx-top-bar.component';

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
  exports: [
    FrameworkBodyComponent
  ]
})
export class SpafxModule { }