import { LedNgWebappPage } from './app.po';

describe('led-ng-webapp App', () => {
  let page: LedNgWebappPage;

  beforeEach(() => {
    page = new LedNgWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
