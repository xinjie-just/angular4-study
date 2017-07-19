import { StockPage } from './app.po';

describe('stock App', () => {
  let page: StockPage;

  beforeEach(() => {
    page = new StockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
