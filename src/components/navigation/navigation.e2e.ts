import { newE2EPage } from '@stencil/core/testing';

let page;
const root = 'c-navigation >>>';
const primaryItems = [{ text: 'home', href: '/home' }, { text: 'about', href: '/about' }];
const secondaryItems = [{ text: 'user', href: '/user' }, { text: 'more', href: '/more' }];

beforeEach(async () => {
  page = await newE2EPage();
});

describe('navigation', () => {
  it('is rendered', async () => {
    await page.setContent(`
      <c-navigation></c-navigation>`);

    const component = await page.find('c-navigation');
    expect(component).toHaveClass('hydrated');

    const navbar = await page.find(`${root} .navbar`);
    expect(navbar).not.toBeNull();
  });

  it('should generate links', async () => {
    await page.setContent(`
      <c-navigation 
        primary-items='${JSON.stringify(primaryItems)}'
        secondary-items='${JSON.stringify(secondaryItems)}'>
      </c-navigation>`);

    const navbarNav = await page.findAll(`${root} .navbar-nav`);

    expect(navbarNav).toHaveLength(2);

    // find a element for primary items
    const linkPrimary = await page.findAll(`${root} .navbar-nav:first-child a`);
    let nodes = '';
    linkPrimary.forEach(node => nodes += node.outerHTML);

    // ensure correct href and text is rendered for primary items
    // TODO: Would be nice if we could use spread operator for the props: ${ {...item} }
    expect(nodes).toEqualHtml(`
      ${primaryItems.map(item => `<a href="${item.href}" class="nav-item nav-link">${item.text}</a>`).join('')}
    `);

    // ensure ml-auto class is rendered
    const linkSecondary = await page.findAll(`${root} .navbar-nav:last-of-type a`);
    nodes = '';
    linkSecondary.forEach(node => nodes += node.outerHTML);

    // ensure correct href and text is rendered for secondary items
    expect(nodes).toEqualHtml(`
      ${secondaryItems.map(item => `<a href="${item.href}" class="nav-item nav-link">${item.text}</a>`).join('')}
    `);
  });

  // test slot elements
  checkSlot('home', 'primary-items');
  checkSlot('more', 'secondary-items');
});

function checkSlot(link, type) {
  it(`should generate ${type} links with slot`, async () => {
    await page.setContent(`
      <c-navigation>
        <a href="/${link}" slot="${type}">${link}</a>
      </c-navigation>`);

    // find items slot
    const template = await page.find(`${root} slot[name=${type}]`);
    expect(template).toBeTruthy();

    // ensure slot renders correct href and text
    const example = await page.find(`c-navigation a[slot=${type}]`);
    expect(example).toBeTruthy();
    expect(example).toEqualHtml(`
      <a href="/${link}" slot="${type}">${link}</a>
    `);
  });
}
