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
    topPart: {
      name: 'Top part',
      description: 'Adds the top part of the footer',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    topPart: true,
  },
};

const Template = ({ topPart }) =>
  formatHtmlPreview(
    `
    <main>
      <div class="sdds-u-p3 sdds-background-white">
        <div class="sdds-body-01">
          Under contruction.
        </div>
      </div>
    </main>
    <sdds-footer>
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
