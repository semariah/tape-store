import { TapeStorePage } from './app.po';

describe('tape-store App', () => {
  let page: TapeStorePage;

  beforeEach(() => {
    page = new TapeStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
