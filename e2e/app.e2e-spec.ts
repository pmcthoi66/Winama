import { WinamaPage } from './app.po';

describe('winama App', function() {
  let page: WinamaPage;

  beforeEach(() => {
    page = new WinamaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
