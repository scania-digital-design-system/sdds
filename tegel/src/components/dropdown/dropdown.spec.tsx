import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { Dropdown } from './dropdown';

describe('sdds-dropdown', () => {
  it('should render something', async () => {
    const page = await newSpecPage({
      components: [Dropdown],
      template: () => <sdds-dropdown></sdds-dropdown>,
    });

    const el = await page.doc.querySelectorAll('sdds-dropdown');
    expect(el).toBeTruthy();
  });
});
