import { newE2EPage } from '@stencil/core/testing';

describe('c-hello-world', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-hello-world></c-hello-world>');
    const element = await page.find('c-hello-world');
    expect(element).toHaveClass('hydrated');
  });
});
