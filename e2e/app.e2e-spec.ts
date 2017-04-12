import { ElasticsearchUIPage } from './app.po';

describe('elasticsearch-ui App', () => {
  let page: ElasticsearchUIPage;

  beforeEach(() => {
    page = new ElasticsearchUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
