import { newE2EPage } from '@stencil/core/testing';

let page;

beforeEach(async () => {
  page = await newE2EPage();
});

describe('content', () => {
  it('is rendered', async () => {
    await page.setContent('<c-content></c-content>');

    // ensure social media component is rendered
    const component = await page.find('c-content');
    expect(component).toHaveClass('hydrated');
  });
});
