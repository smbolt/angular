import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent} from './framework-body/framework-body.component';
import { SpaFxContentComponent} from './spafx-content/spafx-content.component'; 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    SpaFxContentComponent
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class SpafxModule { }