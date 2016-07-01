import { ViditureWebPage } from './app.po';

describe('viditure-web App', function() {
  let page: ViditureWebPage;

  beforeEach(() => {
    page = new ViditureWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
