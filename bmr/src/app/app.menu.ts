import { SpaFxMenuItem } from '../spafx/services/spafx-menu.service';

export let initialMenuItems: Array<SpaFxMenuItem> = [
  {
    text: 'Dashboard',
    icon: 'glyphicon-dashboard',
    route: 'dashboard',
    subMenu: null
  },
  {
    text: 'Countries',
    icon: 'glyphicon-flag',
    route: null,
    subMenu: [
      {
        text: 'Select',
        icon: 'glyphicon-expand',
        route: null,
        subMenu: [
          {
            text: 'USA',
            icon: 'glyphicon-flag',
            route: 'country-detail/USA',
            subMenu: null
          },
          {
            text: 'India',
            icon: 'glyphicon-flag',
            route: 'country-detail/India',
            subMenu: null
          },
          {
            text: 'Switzerland',
            icon: 'glyphicon-flag',
            route: 'country-detail/Switzerland',
            subMenu: null
          }
        ]
      },
      {
        text: 'Top 3',
        icon: 'glyphicon-expand',
        route: 'country-list/3',
        subMenu: null
      },
      {
        text: 'Top 10',
        icon: 'glyphicon-expand',
        route: 'country-list/10',
        subMenu: null
      },
      {
        text: 'All',
        icon: 'glyphicon-expand',
        route: 'country-list/0',
        subMenu: null
      }
    ]
  },
  {
    text: 'Maintenance',
    icon: 'glyphicon-wrench',
    route: null,
    subMenu: [
      {
        text: 'Country List',
        icon: 'glyphicon-th-list',
        route: 'country-maint',
        subMenu: null
      },
      {
        text: 'Settings',
        icon: 'glyphicon-cog',
        route: 'settings',
        subMenu: null
      }
    ]
  }
];