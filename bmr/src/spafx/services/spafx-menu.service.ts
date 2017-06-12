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
}