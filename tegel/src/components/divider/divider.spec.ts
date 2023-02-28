import { newSpecPage } from '@stencil/core/testing';
import { Divider } from './divider';

describe('sdds-divider', () => {
  it('renders with default values', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<sdds-divider></sdds-divider>`,
      supportsShadowDom: true,
    });

    expect(page.root.shadowRoot.querySelector('.sdds-divider')).toHaveClass('horizontal');
    expect(page.root.shadowRoot.querySelector('.sdds-divider')).not.toHaveClass('vertical');
    expect(page.root.shadowRoot.querySelector('.sdds-divider')).not.toHaveClass('sdds-theme-light');
    expect(page.root.shadowRoot.querySelector('.sdds-divider')).not.toHaveClass('sdds-theme-dark');
    expect(page.root.shadowRoot.querySelector('.sdds-divider')).not.toHaveAttribute(
      'aria-orientation',
    );
  });

  it('renders a vertical divider', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<sdds-divider aria-orientation="vertical" direction="vertical"></sdds-divider>`,
      supportsShadowDom: true,
    });

    const divider = page.root.shadowRoot.querySelector('.sdds-divider');

    expect(divider).toHaveClass('vertical');
    expect(divider).not.toHaveClass('horizontal');
    expect(divider).not.toHaveClass('sdds-theme-light');
    expect(divider).not.toHaveClass('sdds-theme-dark');
    expect(divider).toHaveAttribute('aria-orientation');
    expect(divider.getAttribute('aria-orientation')).toEqual('vertical');
  });
});
