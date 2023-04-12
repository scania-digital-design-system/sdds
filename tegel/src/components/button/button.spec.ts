import { newSpecPage } from '@stencil/core/testing';
import { SddsButton } from './button-component';

describe('SddsButton Component', () => {
  it('renders a button with type primary and size lg', async () => {
    const page = await newSpecPage({
      components: [SddsButton],
      html: '<sdds-button></sdds-button>',
      supportsShadowDom: true,
    });

    const { root } = page;
    expect(root.shadowRoot.querySelector('button')).toBeTruthy();
    expect(root.type).toBe('primary');
  });
});
