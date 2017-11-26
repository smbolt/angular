import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SpaFxModule} from '../spafx/spafx.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user/user.service';
import { SpaFxUserApi } from '../spafx/spafx-users/spafx-user-api';
import { AuthGuard } from './services/user/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SpaFxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // UserService,  --this line will work, but the next line shows more info...
    { provide: UserService, useClass: UserService },
    { provide: SpaFxUserApi, useExisting: UserService },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
