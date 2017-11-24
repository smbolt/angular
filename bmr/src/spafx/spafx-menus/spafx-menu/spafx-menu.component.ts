import { Component, OnInit } from '@angular/core';

import { SpaFxMenuService } from '../../services/spafx-menu.service';

@Component({
  selector: 'spafx-menu',
  templateUrl: './spafx-menu.component.html',
  styleUrls: ['./spafx-menu.component.css']
})
export class SpaFxMenuComponent implements OnInit {

  constructor(private menuService: SpaFxMenuService) { }

  ngOnInit() {
  }

}
