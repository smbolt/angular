<<<<<<< HEAD
import { browser, element, by } from 'protractor';
=======
import { browser, by, element } from 'protractor';
>>>>>>> 0c1ab07e3b10908a3c77a070b1f6f17c53c92660

export class BmrPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
