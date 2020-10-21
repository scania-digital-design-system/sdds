// import { store } from '../../store';
import { Navigation } from './navigation';
import { applyTheme } from '../../global.spec';

const component = new Navigation();

describe('navigation', (function () {
  const primaryItems = [{ text: 'home' }];
  const secondaryItems = [{ text: 'user' }];

  applyTheme.call(this);

  it('is initiated', () => {
    expect(this).toBeTruthy();
  });

  it('should generate navigation links', () => {
    // arrange expected conditions

    // act on set items methods
    this.setPrimaryItems(primaryItems);
    this.setSecondaryItems(secondaryItems);

    // assert expected results has been occured
    expect(this.primaryItems).toEqual(primaryItems);
    expect(this.secondaryItems).toEqual(secondaryItems);
  });

  // TODO: failed due to $hostelement$ undefined
  // it('should toggle navigation', () => {
  //   // assert open status
  //   expect(this.navigationOpen).toBe(true);

  //   // change open status
  //   this.toggleNavigation(false);

  //   // assert open status
  //   expect(this.navigationOpen).toBe(false);
  // });

  // it('should toggle sub navigation', () => {
  //   // ensure sub navigation fetch the open state from store
  //   expect(this.navigationExpanded).not.toBeNull();

  //   // change expanded status
  //   this.toggleSubNavigation(true);

  //   // assert expanded status
  //   expect(this.navigationExpanded).toBe(true);

  //   // change expanded status
  //   this.toggleSubNavigation(false);

  //   // assert expanded status
  //   expect(this.navigationExpanded).toBe(false);
  // });
}).bind(component));
