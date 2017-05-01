import { DxutilPage } from './app.po';

describe('dxutil App', () => {
  let page: DxutilPage;

  beforeEach(() => {
    page = new DxutilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
