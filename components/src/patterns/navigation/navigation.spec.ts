import { Navigation } from './navigation';
import { applyTheme } from '../../global.spec';
import store from '../../store';

const navigation = new Navigation();

describe('navigation', () => {
  const primaryItems = [{ text: 'home' }];
  const secondaryItems = [{ text: 'user' }];

  beforeEach(() => {
    store.dispose();
  });

  it('set theme', () => {
    const component = new Navigation();
    applyTheme(component);
  });

  it('is initiated', () => {
    expect(navigation).toBeTruthy();
  });

  it('should generate navigation links', () => {
    // arrange expected conditions

    // act on set items methods
    navigation.setPrimaryItems(primaryItems);
    navigation.setSecondaryItems(secondaryItems);

    // assert expected results has been occured
    expect(navigation.primaryItems).toEqual(primaryItems);
    expect(navigation.secondaryItems).toEqual(secondaryItems);
  });

  // create new Class inside "it" function to avoid "$hostelement$ undefined"
  it('should toggle navigation', () => {
    const component = new Navigation();
    // assert open status
    expect(component.store.navigation.open).toBe(false);

    // change open status
    navigation.toggleNavigation(true);

    // assert open status
    expect(component.store.navigation.open).toBe(true);
  });

  it('should toggle sub navigation', () => {
    const component = new Navigation();

    // change expanded status
    navigation.toggleSubNavigation(true);

    // assert expanded status
    expect(component.store.navigation.expanded).toBe(true);

    // change expanded status
    navigation.toggleSubNavigation(false);

    // assert expanded status
    expect(component.store.navigation.expanded).toBe(false);
  });
});
