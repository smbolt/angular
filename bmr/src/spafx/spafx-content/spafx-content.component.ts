import { Component, OnInit } from '@angular/core';
import { SpaFxMenuService } from './../services/spafx-menu.service';
import { SpaFxScreenService } from './../services/spafx-screen.service';

@Component({
  selector: 'spafx-content',
  templateUrl: './spafx-content.component.html',
  styleUrls: ['./spafx-content.component.css']
})
export class SpaFxContentComponent implements OnInit {

  constructor(private menuService: SpaFxMenuService,
              private screenService: SpaFxScreenService) { }

  ngOnInit() {
  }

}
