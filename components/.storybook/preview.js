import {setCustomElements} from '@storybook/web-components';
import customElements from '../dist/collection/custom-elements.json';

import { addTheme, defineCustomElements } from '../dist/collection/index';
import { theme } from '@scania-sdds/theme-light';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

setCustomElements(customElements);

defineCustomElements();
addTheme(theme);
