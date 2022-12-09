import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Header',
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
      description: 'Set a custom title for the header',
      type: 'string',
    },
  },
  args: {
    siteName: 'Application',
  },
};

const Template = ({ siteName }) =>
  formatHtmlPreview(
    `
    <style>
      .demo-wrapper {
        font-size: 14px;
      }
    </style>
  <div class="demo-wrapper">
  <nav class='sdds-nav'>     
  <div class='sdds-nav__left'>
    <div class='sdds-nav__app-name'>${siteName}</div>
  </div>  
  <div class='sdds-nav__right'>  
    <a class='sdds-nav__item sdds-nav__app-logo' href='#'></a>
  </div> 
</nav>
  </div>
  `,
  );

export const Default = Template.bind({});
