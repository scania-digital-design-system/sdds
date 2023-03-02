import { newSpecPage } from '@stencil/core/testing';
import { Divider } from './divider';

describe('sdds-divider', () => {
  it('renders a horizontal divider with default color', async () => {
    const { root } = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider></sdds-divider>',
    });

    const divider = root.shadowRoot.querySelector('hr');
    expect(divider).not.toBeNull();
    expect(divider.getAttribute('class')).toContain('sdds-divider');
    expect(divider.getAttribute('class')).toContain('horizontal');
  });

  it('renders a vertical divider with light color', async () => {
    const { root } = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider direction="vertical" light></sdds-divider>',
    });

    const divider = root.shadowRoot.querySelector('div');
    expect(divider).not.toBeNull();
    expect(divider.getAttribute('class')).toContain('sdds-divider');
    expect(divider.getAttribute('class')).toContain('vertical');
    expect(divider.getAttribute('class')).toContain('sdds-theme-light');
  });

  it('renders a horizontal divider with label', async () => {
    const { root } = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider aria-label="Divider label"><span slot="label">Divider label</span></sdds-divider>',
    });

    const divider = root.shadowRoot.querySelector('hr');
    expect(divider).not.toBeNull();
    expect(divider.getAttribute('class')).toContain('sdds-divider');
    expect(divider.getAttribute('class')).toContain('horizontal');

    const label = root.shadowRoot.querySelector('.sdds-divider-label');
    expect(label).not.toBeNull();
    expect(label.getAttribute('aria-hidden')).toBe('');
    expect(label.textContent).toBe('Divider label');
  });
});
