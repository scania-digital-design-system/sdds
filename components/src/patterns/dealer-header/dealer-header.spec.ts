import { applyTheme } from '../../global.spec';
import store from '../../store';
import { DealerHeader } from './dealer-header';

const dealerHeader = new DealerHeader();

describe('dealer-header', function () {
  beforeEach(() => {
    store.dispose();
  });

  it('set theme', () => {
    const component = new DealerHeader();
    applyTheme(component);
  });

  it('is initiated', () => {
    expect(dealerHeader).toBeTruthy();
  });
});
