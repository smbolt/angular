import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { SpafxModule} from '../spafx/spafx.module';
>>>>>>> 0c1ab07e3b10908a3c77a070b1f6f17c53c92660

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule
=======
    HttpModule,
    SpafxModule
>>>>>>> 0c1ab07e3b10908a3c77a070b1f6f17c53c92660
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
