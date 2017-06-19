import { Component, OnInit } from '@angular/core';
import { SpaFxMenuService } from './../services/spafx-menu.service';

@Component({
  selector: 'spafx-content',
  templateUrl: './spafx-content.component.html',
  styleUrls: ['./spafx-content.component.css']
})
export class SpaFxContentComponent implements OnInit {

  constructor(private menuService: SpaFxMenuService) { }

  ngOnInit() {
  }

}
