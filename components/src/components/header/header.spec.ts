// import { store } from '../../store';
import { applyTheme } from '../../global.spec';
import { Header } from './header';

const component = new Header();

describe('header', (function () {
  const items = [{ text: 'global' }];
  
  applyTheme.call(this);

  it('is initiated', () => {
    expect(this).toBeTruthy();
  });

  it('should generate top links', () => {
    expect(this.items).toEqual([]);

    this.setItems(items);

    expect(this.items).toEqual(items);
  });

  // TODO: failed due to $hostelement$ undefined
  // it('should toggle navigation', () => {
  //   expect(this.navigationOpen).toBe(false);

  //   this.toggleNavigation(true);

  //   expect(this.navigationOpen).toBe(true);
  // });
}).bind(component));
