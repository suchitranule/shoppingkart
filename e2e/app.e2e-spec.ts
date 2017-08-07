import { JobsRallyPage } from './app.po';

describe('jobs-rally App', () => {
  let page: JobsRallyPage;

  beforeEach(() => {
    page = new JobsRallyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
