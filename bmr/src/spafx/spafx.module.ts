import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent} from './framework-body/framework-body.component';
import { SpaFxContentComponent} from './spafx-content/spafx-content.component'; 
import { TitleBarComponent} from './title-bar/title-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    SpaFxContentComponent,
    TitleBarComponent
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class SpafxModule { }