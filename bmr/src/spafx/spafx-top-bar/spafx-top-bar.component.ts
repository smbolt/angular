import { Component, OnInit } from '@angular/core';

import { SpaFxConfigService } from '../services/spafx-config.service';

@Component({
  selector: 'spafx-top-bar',
  templateUrl: './spafx-top-bar.component.html',
  styleUrls: ['./spafx-top-bar.component.css']
})
export class SpaFxTopBarComponent implements OnInit {

  constructor(private spaFxConfigService: SpaFxConfigService) { }

  ngOnInit() {
  }

}
