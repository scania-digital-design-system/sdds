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
      <sdds-divider role="separator" class="sdds-divider horizontal ">
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
      <sdds-divider aria-orientation="vertical" class="sdds-divider vertical" direction="vertical" role="separator">
        <mock:shadow-root>
          <div></div>
        </mock:shadow-root>
      </sdds-divider>
    `);
  });

  it('sets the light class when the light prop is true', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider light></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('sdds-theme-light');
  });

  it('sets the dark class when the dark prop is true', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider dark></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('sdds-theme-dark');
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

  it('sets the class based on the light prop', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider light></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('sdds-theme-light');
  });

  it('sets the class based on the dark prop', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: '<sdds-divider dark></sdds-divider>',
      supportsShadowDom: true, // enable ShadowDOM
    });
    const { root } = page;
    expect(root).toHaveClass('sdds-theme-dark');
  });
});
