import { browser, element, by } from 'protractor';

export class NgxNoConsolePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngx-no-console-root h1')).getText();
  }
}
