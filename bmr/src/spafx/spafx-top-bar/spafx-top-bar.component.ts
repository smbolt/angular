import { Component, OnInit } from '@angular/core';

import { SpaFxConfigService } from '../services/spafx-config.service';
import { SpaFxUserApi } from 'spafx/spafx-users/spafx-user-api';

@Component({
  selector: 'spafx-top-bar',
  templateUrl: './spafx-top-bar.component.html',
  styleUrls: ['./spafx-top-bar.component.css']
})
export class SpaFxTopBarComponent implements OnInit {

  constructor(private spaFxConfigService: SpaFxConfigService,
              private userApi: SpaFxUserApi) { }

  ngOnInit() {
  }

  signOut() {
    this.userApi.signOut();
  }

}
