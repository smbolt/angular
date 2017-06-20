import { Injectable } from '@angular/core';

export interface SpaFxMenuItem {
  text: string,
  icon: string,
  route: string,
  subMenu: Array<SpaFxMenuItem>
}

@Injectable()
export class SpaFxMenuService {

  items: Array<SpaFxMenuItem>;
  isVertical = true;
  showingLeftSideMenu = false;

  toggleLeftSideMenu() : void {
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }
}