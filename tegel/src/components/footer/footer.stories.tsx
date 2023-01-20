import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Footer',
  parameters: {
    notes: readme,
    layout: 'fullscreen',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=7568%3A298118&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=7568%3A298118&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      description: 'Footer mode variant',
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    topPart: {
      name: 'Top part',
      description: 'Adds top part of the footer with more links.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  args:{
    modeVariant: 'Inherit from parent', 
    topPart: false,
}
};

const Template = ({ topPart, modeVariant}) =>
  formatHtmlPreview(
    `
  <style>
  .demo-wrapper {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  </style>

  <div class="demo-wrapper">
  <div class="sdds-footer 
  ${modeVariant !== 'Inherit from parent' ? `sdds-mode-variant-${modeVariant.toLowerCase()}`: ''}
 ">
    ${
      topPart
        ? `
      <div class="sdds-footer-top sdds-container-fluid">
        <div class="sdds-row">
          <div class="sdds-footer-top-col sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
            <div class="sdds-footer-title opened">
              <span>Title 1</span>
              <span class="sdds-footer-top-icon">
                <sdds-icon name="chevron_down" size="16px"></sdds-icon>
              </span>
            </div>
            <ul class="sdds-footer-main-links opened">
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
            </ul>
          </div>

          <div class="sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
            <div class="sdds-footer-title">
              <span>Title 2</span>
              <span class="sdds-footer-top-icon">
              <sdds-icon name="chevron_down" size="16px"></sdds-icon>
              </span>
            </div>
            <ul class="sdds-footer-main-links">
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
            </ul>
          </div>
        </div>
      </div>
      `
        : ''
    }
    <div class="sdds-footer-main">
      <ul class="sdds-footer-main-links">
        <li><a href="#">Legal link</a></li>
        <li><a href="#">Legal link</a></li>
        <li><a href="#">Legal link</a></li>
      </ul>
      <ul class="sdds-footer-social-links">
        <li><a href="#">Social link</a></li>
        <li><a href="#">Social link</a></li>
        <li><a href="#">Social link</a></li>
      </ul>
      <div class="sdds-footer-main-brand">
        <p>Copyright &copy; 2022 Scania</p>
      </div>
    </div>
  </div>
    </div>
  `,
  );

export const Default = Template.bind({});

