import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeHamburger from './header-hamburger/readme.md';
import readmeTitle from './header-title/readme.md';
import readmeButton from './header-button/readme.md';
import readmeLink from './header-link/readme.md';
import readmeDropdown from './header-dropdown/readme.md';
import readmeDropdownList from './header-dropdown-list/readme.md';
import readmeDropdownListLink from './header-dropdown-list-link/readme.md';
import readmeDropdownListLg from './header-dropdown-list-lg/readme.md';
import readmeDropdownListLgLink from './header-dropdown-list-lg-link/readme.md';
import readmeDropdownListLgUser from './header-dropdown-list-lg-user/readme.md';
import readmeLauncher from './header-launcher/readme.md';

export default {
  title: 'Components/Header/Web Component',
  parameters: {
    notes: {
      'Header': readme,
      'Header hamburger': readmeHamburger,
      'Header title': readmeTitle,
      'Header button': readmeButton,
      'Header link': readmeLink,
      'Header dropdown': readmeDropdown,
      'Header dropdown list': readmeDropdownList,
      'Header dropdown list link': readmeDropdownListLink,
      'Header dropdown list lg': readmeDropdownListLg,
      'Header dropdown list lg link': readmeDropdownListLgLink,
      'Header dropdown list lg user': readmeDropdownListLgUser,
      'Header launcher': readmeLauncher,
    },
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    siteName: {
      name: 'Site name',
      description: 'Set a custom title for the header',
      type: 'string',
    },
  },
  args: {
    siteName: 'Application',
  },
};

const Template = () =>
  formatHtmlPreview(
    `
  <sdds-header>
    <sdds-header-title>
      Example: default
    </sdds-header-title>

    <sdds-header-launcher slot="end">
      <sdds-header-launcher-list-title>Cool apps</sdds-header-launcher-list-title>
      <sdds-header-launcher-list>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
      </sdds-header-launcher-list>
    </sdds-header-launcher>

    <sdds-header-logo slot="end" link-href="https://scania.com">
    </sdds-header-logo>

  </sdds-header>
  
  <main class="sdds-u-w-100 sdds-u-p3" style="box-sizing: border-box;">
    <p>Find complete examples under the <a href="/?path=/story/patterns-navigation--basic">Patterns section</a>.</p>
  </main>
  `,
  );

export const Default = Template.bind({});
