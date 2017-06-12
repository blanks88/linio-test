import { LinioTestPage } from './app.po';

describe('linio-test App', () => {
  let page: LinioTestPage;

  beforeEach(() => {
    page = new LinioTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
