import CardPlaceholder from '../../stories/assets/image/card-placeholder.png';
import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Card',
  parameters: {
    notes: readme,
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2891%3A125&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2891%3A125&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      description: 'Mode variant of the component, based on current mode.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    header: {
      name: 'Header text',
      description: 'The header text',
      control: {
        type: 'text',
      },
    },
    subheader: {
      name: 'Subheader text',
      description: 'The subheader text',
      control: {
        type: 'text',
      },
    },
    headerImg: {
      name: 'Header image',
      description: 'Image for the header',
      control: {
        type: 'boolean',
      },
    },
    headerPlacement: {
      name: 'Header placement',
      description: 'Placement of the header',
      control: {
        type: 'radio',
      },
      options: ['Above', 'Below'],
      table: {
        defaultValue: { summary: 'above' },
      },
    },
    bodyContent: {
      name: 'Body text',
      description: 'The body text for the card',
      control: {
        type: 'text',
      },
    },
    clickable: {
      name: 'Clickable',
      description: 'Toggles if the card is clickable or not.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    bodyDivider: {
      name: 'Body divider',
      description: 'Adds a divider above the body content.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
      if: { arg: 'bodyImg', eq: false },
    },
    bodyImg: {
      name: 'Body image',
      description: 'Image in body on card.',
      control: {
        type: 'boolean',
      },
    },
    cardBottom: {
      name: 'Content of the bottom of the card',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    header: 'Header text',
    subheader: 'Subheader text',
    headerImg: true,
    headerPlacement: 'Above',
    bodyImg: false,
    bodyContent: '',
    bodyDivider: false,
    cardBottom: `<div slot="card-bottom"><sdds-icon style="font-size: 20px;" name="arrow_right"></sdds-icon></div>`,
    modeVariant: 'Inherit from parent',
    clickable: false,
  },
};

const Template = ({
  modeVariant,
  headerPlacement,
  header,
  subheader,
  bodyContent,
  clickable,
  headerImg,
  bodyImg,
  bodyDivider,
  cardBottom,
}) =>
  formatHtmlPreview(
    `<style>
    /* demo-wrapper is for demonstration purposes only*/
    .demo-wrapper {
        width: 368px;
    }
    </style>
    <div class="demo-wrapper">
    <sdds-card
    ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
    ${header ? `header="${header}"` : ''}
    header-placement="${headerPlacement.toLowerCase()}"
    ${subheader ? `subheader="${subheader}"` : ''}
    ${headerImg ? `header-img="${CardPlaceholder}"` : ''}
    ${bodyImg ? `body-img="${CardPlaceholder}"` : ''}
    ${clickable ? 'clickable' : ''}
    ${bodyDivider ? 'body-divider' : ''}
  >
  ${
    bodyContent
      ? `
    <div slot="card-body">
        ${bodyContent}
    </div>`
      : ''
  }
    ${cardBottom ? `${cardBottom}` : ''}
    </sdds-card>
    </div>
    ${
      clickable
        ? `
    <script>
        document.addEventListener('sddsClick', (event)=>{
            console.log('Card with id: ', event.detail.cardId, ' was clicked.')
        })
    </script>
    `
        : ''
    }
  `,
  );

export const WebComponent = Template.bind({});
