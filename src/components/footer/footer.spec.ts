// import { store } from '../../store';
import { Footer } from './footer';
import { applyTheme } from '../../global.spec';

const component = new Footer();

describe('footer', (function () {
  const items = [{ text: 'contact us' }];
  const socialItems = [{ icon: 'youtube' }];

  applyTheme.call(this);

  it('is initiated', () => {
    expect(this).toBeTruthy();
  });

  it('should have copyright text', () => {
    expect(this.text).toBeTruthy();
  });

  it('should generate footer links', () => {
    // check if initial property is empty
    expect(this.items).toEqual([]);

    this.setItems(items);

    // check if functionality to generate link items work
    expect(this.items).toEqual(items);
  });

  it('should generate footer social links', () => {
    // check if initial property is empty
    expect(this.socialItems).toEqual([]);

    this.setSocialItems(socialItems);

    // check if functionality to generate link items work
    expect(this.socialItems).toEqual(socialItems);
  });
}).bind(component));
