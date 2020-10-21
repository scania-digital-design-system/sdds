import { store } from './store';
import { Theme } from './components/theme/theme';

(<any>window).CorporateUi = {};

export function applyTheme() {
  // const component = new Component();

  const theme = 'scania';
  const newTheme = 'man';

  const themeComponent = new Theme();
  themeComponent.name = theme;
  themeComponent.ContextStore = store;
  themeComponent.componentWillLoad();

  describe('theme', () => {
    this.ContextStore = store;
    this.componentWillLoad();
    // component.componentDidLoad();
    // component.store = store;
    // component.setTheme(theme);
    // component.theme = theme;

    it('should support theming', () => {
      expect(store.getState().theme.current).toBe(theme);
      expect(this.theme).toBe(theme);

      this.setTheme(newTheme);

      expect(this.theme).toBe(newTheme);
      expect(store.getState().theme.current).not.toBe(newTheme);
    });
  });
};
