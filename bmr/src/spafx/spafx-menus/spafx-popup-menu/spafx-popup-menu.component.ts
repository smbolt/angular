import { Component, Input, OnInit } from '@angular/core';

import { SpaFxMenuItem, SpaFxMenuService } from '../../services/spafx-menu.service';

@Component({
  selector: 'spafx-popup-menu',
  templateUrl: './spafx-popup-menu.component.html',
  styleUrls: ['./spafx-popup-menu.component.css']
})
export class SpaFxPopupMenuComponent implements OnInit {

  @Input() menu: Array<SpaFxMenuItem>;

  constructor(private menuService: SpaFxMenuService) { }

  ngOnInit() {
  }

}
