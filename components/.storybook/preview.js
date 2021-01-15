import {setCustomElements} from '@storybook/web-components';
import customElements from '../dist/collection/custom-elements.json';

import { addTheme, defineCustomElements } from '../dist/collection/index';
import { theme } from '../../theme/light/dist/module';

export const parameters = {
  controls: { expanded: true }
}

setCustomElements(customElements);

defineCustomElements();
addTheme(theme);
