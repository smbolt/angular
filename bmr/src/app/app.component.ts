import { Component } from '@angular/core';
import { SpaFxConfigService, SpaFxConfigSettings } from '../spafx/services/spafx-config.service';
import { SpaFxMenuService } from '../spafx/services/spafx-menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private frameworkConfigService: SpaFxConfigService,
              private spaFxMenuService: SpaFxMenuService){
    
    let config:SpaFxConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/images/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/images/social-google-bw.png', alt: 'Google', link: 'http://www.google.com' },
        { imageFile: 'assets/images/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);
    spaFxMenuService.items = initialMenuItems;
  }

}
