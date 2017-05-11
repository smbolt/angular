import { BmrPage } from './app.po';

describe('bmr App', () => {
  let page: BmrPage;

  beforeEach(() => {
    page = new BmrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
