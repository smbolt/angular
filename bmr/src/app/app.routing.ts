import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SpaFxSignInComponent } from '../spafx/spafx-users/spafx-sign-in/spafx-sign-in.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { SettingsComponent } from './settings/settings.component';
import { SpaFxRegisterUserComponent } from 'spafx/spafx-users/spafx-register-user/spafx-register-user.component';

export const appRoutes: Routes = [
  { path: 'signin', component: SpaFxSignInComponent },
  { path: 'register', component: SpaFxRegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent,
    children : [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'country-list/:count', component: CountryListComponent },
      { path: 'country-detail/:country', component: CountryDetailComponent },
      { path: 'country-maint', component: CountryMaintComponent },
      { path: 'settings', component: SettingsComponent },
    ] },
  { path: '', component: SpaFxSignInComponent },
  { path: '**', component: SpaFxSignInComponent }
];
