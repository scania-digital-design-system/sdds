import { createStore } from '@stencil/store';

const theme = {
  current: 'light',
  items: {},
};

const navigation = { open: false, expanded: undefined };

const store = createStore({
  theme: theme,
  navigation: navigation,
});

store.onChange('navigation', (value) => {
  store.state.navigation = value;
});

store.onChange('theme', (value) => {
  store.state.theme = value;
});

export default store;
