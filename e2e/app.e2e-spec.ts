import { Ng4RecipeAppPage } from './app.po';

describe('ng4-recipe-app App', () => {
  let page: Ng4RecipeAppPage;

  beforeEach(() => {
    page = new Ng4RecipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
