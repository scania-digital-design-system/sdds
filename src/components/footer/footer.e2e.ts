import { newE2EPage } from '@stencil/core/testing';

describe('c-footer', () => {
  let page;
  const root = 'c-footer >>>';

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('is rendered', async () => {
    await page.setContent('<c-footer></c-footer>');

    // ensure navbar container is rendered
    const component = await page.find('c-footer');
    expect(component).toHaveClass('hydrated');

    // ensure logo brand is rendered
    const logo = await page.find(`${root} .navbar-brand`);
    expect(logo).not.toBeNull();

    // ensure copyright is rendered
    const copyright = await page.find(`${root} p`);
    expect(copyright).toBeTruthy();
  });

  it('should generate links from data', async () => {
    // arrange links with data
    await page.setContent(`
      <c-footer items='[{ "text": "About", "href": "/about"}]'>
      </c-footer>`);

    // test if link rendered correctly
    const navItems = await page.find(`${root} .nav-item.nav-link`);
    expect(navItems).toEqualHtml(`
      <a href="/about" class="nav-item nav-link">About</a>
    `);
  });

  it('should generate links from slot', async () => {
    // arrange links with slot
    await page.setContent(`
      <c-footer>
        <a href='/cookies' slot='items'>Cookies</a>
      </c-footer>`);

    //  test if slot is rendered inside shadow root
    const template = await page.find(`${root} slot[name='items']`);
    expect(template).toBeTruthy();

    // test if slot content renders correct link
    const navItems = await page.find('c-footer a[slot=\'items\']');
    expect(navItems).toEqualHtml(`
      <a href="/cookies" slot="items">Cookies</a>
    `);
  });
});
