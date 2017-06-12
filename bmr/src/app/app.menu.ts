import { SpaFxMenuItem } from '../spafx/services/spafx-menu.service';

export let initialMenuItems: Array<SpaFxMenuItem> = [
  {
    text: 'Dashboard',
    icon: 'glyphicon-dashboard',
    route: '/dashboard',
    subMenu: null
  },
  {
    text: 'Countries',
    icon: 'glyphicon-flag',
    route: '/countries',
    subMenu: null
  },
  {
    text: 'Settings',
    icon: 'glyphicon-wrench',
    route: '/settings',
    subMenu: null
  }
];