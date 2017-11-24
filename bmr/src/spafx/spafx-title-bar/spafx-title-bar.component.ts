import { Component, OnInit } from '@angular/core';

import { SpaFxScreenService} from '../services/spafx-screen.service';
import { SpaFxMenuService } from '../services/spafx-menu.service';

@Component({
  selector: 'spafx-title-bar',
  templateUrl: './spafx-title-bar.component.html',
  styleUrls: ['./spafx-title-bar.component.css']
})
export class SpaFxTitleBarComponent implements OnInit {

  constructor(private screenService: SpaFxScreenService,
              private menuService: SpaFxMenuService) { }

  ngOnInit() {
  }

}
