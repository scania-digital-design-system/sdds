import { Content } from './content';
import { applyTheme } from '../../global.spec';
import store from '../../store';

describe('content', function () {

  beforeEach(() => {
    store.dispose();
  });

  it('set theme', () => {
    const component = new Content();
    applyTheme(component);
  });

  it('is initiated', () => {
    const component = new Content();
    expect(component).toBeTruthy();
  });
});
