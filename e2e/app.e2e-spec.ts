import { TrainingTimerPage } from './app.po';

describe('training-timer App', function() {
  let page: TrainingTimerPage;

  beforeEach(() => {
    page = new TrainingTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
