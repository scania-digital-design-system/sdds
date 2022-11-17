import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Header',
  parameters: {
    notes: readme,
    layout: 'fullscreen',
  },
  argTypes: {
    siteName: {
      name: 'Site name',
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
Default.args = {
  siteName: 'Basic App',
};
