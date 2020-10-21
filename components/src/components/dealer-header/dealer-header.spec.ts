// import { store } from '../../store';
import { applyTheme } from '../../global.spec';
import { DealerHeader } from './dealer-header';

const component = new DealerHeader();

describe('dealer-header', (function () {

  applyTheme.call(this);

  it('is initiated', () => {
    expect(this).toBeTruthy();
  });
}).bind(component));
