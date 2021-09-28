import store from './store';
import { Theme } from './components/theme/theme';

(<any>window).CorporateUi = {};

export function applyTheme(component) {
  const theme = 'scania';
  const newTheme = 'man';

  const themeComponent = new Theme();
  themeComponent.name = theme;
  themeComponent.componentWillLoad();

  component.componentWillLoad();
  expect(store.state.theme.current).toBe(theme);
  expect(component.theme).toBe(theme);

  component.setTheme(newTheme);

  expect(component.theme).toBe(newTheme);
  expect(store.state.theme.current).not.toBe(newTheme);
}
