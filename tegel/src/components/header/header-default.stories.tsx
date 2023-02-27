import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Header/Native',
  parameters: {
    notes: readme,
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
      description: 'Sets a custom title for the header.',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    siteName: 'Application',
  },
};

const Template = ({ siteName }) =>
  formatHtmlPreview(
    `
  <nav class='sdds-nav'>
  <div class='sdds-nav__left'>
    <div class='sdds-nav__app-name'>${siteName}</div>
  </div>
  <div class='sdds-nav__right'>
    <a class='sdds-nav__item sdds-nav__app-logo' href='#'></a>
  </div>
</nav>
  `,
  );

export const Default = Template.bind({});
