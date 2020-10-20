import { Content } from './content';
import { applyTheme } from '../../global.spec';

const component = new Content();

describe('content', (function () {

  applyTheme.call(this);

  it('is initiated', () => {
    expect(this).toBeTruthy();
  });
}).bind(component));
