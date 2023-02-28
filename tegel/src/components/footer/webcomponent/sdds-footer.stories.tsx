import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeLink from './sdds-footer-link/readme.md';
import readmeLinkGroup from './sdds-footer-link-group/readme.md';

export default {
  title: 'Components/Footer',
  parameters: {
    notes: { 'Footer': readme, 'Footer link group': readmeLinkGroup, 'Footer link': readmeLink },
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
      description: 'Adds the top part of the footer',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    topPart: true,
  },
};

const Template = ({ topPart, modeVariant }) =>
  formatHtmlPreview(
    `
    <main>
      <div class="sdds-u-p3 ">
        <div class="sdds-body-01">
          Resize the window to see how the footer behaves on smaller/bigger screens.
        </div>
      </div>
    </main>
    <sdds-footer
    ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
    >
      ${
        topPart
          ? `
      <div slot="top">
        <sdds-footer-link-group title-text="Title">
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
        </sdds-footer-link-group>

        <sdds-footer-link-group title-text="Title">
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
        </sdds-footer-link-group>

        <sdds-footer-link-group title-text="Title">
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
        </sdds-footer-link-group>

        <sdds-footer-link-group title-text="Title">
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
        </sdds-footer-link-group>

        <sdds-footer-link-group title-text="Title">
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
        </sdds-footer-link-group>
      </div>
      `
          : ''
      }
      <div slot="main-left">
        <sdds-footer-link-group>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          <sdds-footer-link link-href="#">Link text</sdds-footer-link>
        </sdds-footer-link-group>
      </div>
      <div slot="main-right">
        <sdds-footer-link-group>
          <sdds-footer-link link-href="#">
          <sdds-icon name="truck"></sdds-icon>
          </sdds-footer-link>
          <sdds-footer-link link-href="#">
            <sdds-icon name="truck"></sdds-icon>
          </sdds-footer-link>
          <sdds-footer-link link-href="#">
            <sdds-icon name="truck"></sdds-icon>
          </sdds-footer-link>
        </sdds-footer-link-group>
      </div>
    </sdds-footer>
  
  `,
  );

export const WebComponent = Template.bind({});
