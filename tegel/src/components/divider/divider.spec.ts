import { newSpecPage } from '@stencil/core/testing';
import { Divider } from './divider';

describe('sdds-divider', () => {
  it('renders the horizontal version with default classes', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toEqualHtml(`
      <sdds-divider role="separator" class="sdds-divider sdds-divider-light horizontal">
        <mock:shadow-root>
          <hr>
        </mock:shadow-root>
      </sdds-divider>
    `);
  });

  it('renders the vertical version with default classes', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider direction="vertical"></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toEqualHtml(`
      <sdds-divider aria-orientation="vertical" class="sdds-divider sdds-divider-light vertical" direction="vertical" role="separator">
        <mock:shadow-root>
          <div></div>
        </mock:shadow-root>
      </sdds-divider>
    `);
  });

  it('sets the light class when the type prop is not specified or set to "light"', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('sdds-divider-light');
  });

  it('sets the dark class when the type prop is set to "dark"', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider type="dark"></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('sdds-divider-dark');
  });

  it('sets the class based on the direction prop', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider direction="vertical"></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('vertical');
  });

  it('sets the class based on the type prop', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider type="dark"></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('sdds-divider-dark');
  });
});
