import { VatutinPage } from './app.po';

describe('vatutin App', () => {
  let page: VatutinPage;

  beforeEach(() => {
    page = new VatutinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
