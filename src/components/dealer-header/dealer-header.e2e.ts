import { newE2EPage } from '@stencil/core/testing';

describe('c-dealer-header', () => {
  let page;
  const root = 'c-dealer-header >>>';
  const dealerName = 'Bilmetro';
  const dealerLogo = 'img/logo.jpg';

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('is rendered', async () => {
    await page.setContent(`
      <c-dealer-header site-name="${dealerName}"></c-dealer-header>`);

    const component = await page.find('c-dealer-header');
    expect(component).toHaveClass('hydrated');

    const header = await page.find(`${root} c-header`);
    expect(header).not.toBeNull();
    expect(header).toEqualAttributes({ 'site-name': dealerName, variation: 'dealer' });
  });

  it('should render application title', async () => {
    await page.setContent(`
      <c-dealer-header site-name="${dealerName}"></c-dealer-header>`);

    const title = await page.find(`${root} strong`);
    expect(title).toEqualHtml(`<strong class="navbar-title" slot="brand-logo">${dealerName}</a>`);
  });

  it('should render application logo', async () => {
    await page.setContent(`
      <c-dealer-header logo="${dealerLogo}"></c-dealer-header>`);

    const brandLogo = await page.find(`${root} img`);
    expect(brandLogo).toEqualHtml(`<img slot="brand-logo" src="${dealerLogo}">`);
  });

  it('should generate top links', async () => {
    await page.setContent(`
      <c-dealer-header>
        <a href="/" slot="items">Configuration</a>
      </c-dealer-header>`);

    const template = await page.find(`${root} slot[name=items]`);
    expect(template).toBeTruthy();

    const example = await page.find('c-dealer-header a[slot=items]');
    expect(example).toBeTruthy();
  });
});
