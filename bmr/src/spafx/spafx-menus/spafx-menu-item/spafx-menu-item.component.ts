import { Component, ElementRef, HostBinding, HostListener, 
         Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpaFxMenuService, SpaFxMenuItem } from '../../services/spafx-menu.service';

@Component({
  selector: 'spafx-menu-item',
  templateUrl: './spafx-menu-item.component.html',
  styleUrls: ['./spafx-menu-item.component.css']
})
export class SpaFxMenuItemComponent implements OnInit {
  @Input() item = <SpaFxMenuItem> null; // see angular-cli issue 2034
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute="false";

  mouseInItem=false;
  mouseInPopup=false;
  popupLeft=0;
  popupTop=34;

  constructor(private router: Router,
              private menuService: SpaFxMenuService) { }

  ngOnInit() {
  }

  onPopupMouseEnter(event) : void {
    if (!this.menuService.isVertical){
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event) : void {
    if (!this.menuService.isVertical){
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event']) 
  onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter') 
  onMouseEnter() : void {
    if (!this.menuService.isVertical) {
      if (this.item.subMenu) {
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0; 
        }
      }
    }
  }

}
