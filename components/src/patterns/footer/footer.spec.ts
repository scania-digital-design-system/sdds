import store from '../../store';
import { Footer } from './footer';
import { applyTheme } from '../../global.spec';

// const component = new Footer();

describe('footer', (function () {
  const items = [{ text: 'contact us' }]; 
  const socialItems = [{ icon: 'youtube' }]; 
  
  beforeEach(() => {
    store.dispose();
  });

  it('set theme', () => {
    const component = new Footer();
    applyTheme(component);
  });

  it('is initiated', () => {
    const component = new Footer();
    expect(component).toBeTruthy();
  });

  it('should have copyright text', () => {
    const component = new Footer();
    expect(component.text).toBeTruthy();
  });

  it('should generate footer links', () => {
    // check if initial property is empty
    const component = new Footer();
    expect(component.items).toEqual([]);

    component.setItems(items);

    // check if functionality to generate link items work
    expect(component.items).toEqual(items);
  });

  it('should generate footer social links', () => {
    // check if initial property is empty
    const component = new Footer();
    expect(component.socialItems).toEqual([]);

    component.setSocialItems(socialItems);

    // check if functionality to generate link items work
    expect(component.socialItems).toEqual(socialItems);
  });
}));
