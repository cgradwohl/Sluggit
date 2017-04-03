import { BlankMeanPage } from './app.po';

describe('blank-mean App', () => {
  let page: BlankMeanPage;

  beforeEach(() => {
    page = new BlankMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
