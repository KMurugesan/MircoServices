import { JavaMicroServicesPage } from './app.po';

describe('java-micro-services App', function() {
  let page: JavaMicroServicesPage;

  beforeEach(() => {
    page = new JavaMicroServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
