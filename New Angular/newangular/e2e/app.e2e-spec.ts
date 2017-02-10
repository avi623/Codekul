import { NewangularPage } from './app.po';

describe('newangular App', function() {
  let page: NewangularPage;

  beforeEach(() => {
    page = new NewangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
