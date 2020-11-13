import { applyTheme } from '../../global.spec';
import store from '../../store';
import { Header } from './header';

const header = new Header();

describe('header', function () {
  const items = [{ text: 'global' }];
  
  beforeEach(() => {
    store.dispose();
  });

  it('set theme', () => {
    const component = new Header();
    applyTheme(component);
  });

  it('is initiated', () => {
    expect(header).toBeTruthy();
  });

  it('should generate top links', () => {
    expect(header.items).toEqual([]);

    header.setItems(items);

    expect(header.items).toEqual(items);
  });

  it('should toggle navigation', () => {
    // need to create new Class inside to avoid "$hostelement$ undefined"
    const component = new Header();
    expect(component.navigationOpen).toBe(false);

    component.toggleNavigation(true);

    expect(component.navigationOpen).toBe(true);
  });
});
