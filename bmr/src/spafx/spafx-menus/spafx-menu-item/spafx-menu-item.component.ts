import { Component, Input, OnInit } from '@angular/core';
import { SpaFxMenuService } from '../../services/spafx-menu.service';
import { SpaFxMenuItem } from '../../services/spafx-menu.service';

@Component({
  selector: 'spafx-menu-item',
  templateUrl: './spafx-menu-item.component.html',
  styleUrls: ['./spafx-menu-item.component.css']
})
export class SpaFxMenuItemComponent implements OnInit {
  @Input() item: SpaFxMenuItem;

  constructor() { }

  ngOnInit() {
  }

}
