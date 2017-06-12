import { Injectable } from '@angular/core';

export interface IconFiles {
    imageFile: string,
    alt: string,
    link: string
}

export interface SpaFxConfigSettings {
    showLanguageSelector?: boolean,
    showUserControls?: boolean,
    showStatusBar?: boolean,
    showStatusBarBreakpoint?: number,
    socialIcons?: Array<IconFiles>
}


@Injectable()
export class SpaFxConfigService {

    showLanguageSelector = true;
    showUserControls = true;
    showStatusBar = true;
    showStatusBarBreakpoint = 0;
    socialIcons = new Array<IconFiles>();

    configure(settings: SpaFxConfigSettings) : void {
        Object.assign(this, settings);
    }

}
