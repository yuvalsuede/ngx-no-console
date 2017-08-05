import { NgxNoConsolePage } from './app.po';

describe('ngx-no-console App', () => {
  let page: NgxNoConsolePage;

  beforeEach(() => {
    page = new NgxNoConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngx-no-console works!');
  });
});
