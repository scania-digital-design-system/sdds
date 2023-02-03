import CardImage from '../../stories/assets/image/card-img.png';
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
        type: 'text',
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
    },
    bodyImg: {
      name: 'Body image',
      description: 'Image in body on card.',
      control: {
        type: 'text',
      },
    },
    imageTop: {
      name: 'Image on top',
      description: 'Places the body image above the header.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: false },
      },
      if: { arg: 'image', eq: true },
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
    headerImg: 'https://www.svgrepo.com/show/170303/avatar.svg',
    headerPlacement: 'Above',
    bodyImg: CardImage,
    bodyContent:
      '<p>This is a short and consist detail text describing for the user what this text is really about.</p>',
    bodyDivider: false,
    cardBottom: `<div slot="card-bottom"><sdds-button text="Button text"></sdds-button></div>`,
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
        width: 300px;
    }
    </style>
    <sdds-card
        ${
          modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''
        }
        header-placement="${headerPlacement.toLowerCase()}"
        header="${header}"
        subheader="${subheader}"
        ${headerImg ? `header-img="${headerImg}"` : ''}
        body-img="${bodyImg}"
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
    ${
      clickable
        ? `
    <script>
        document.addEventListener('sddsCardClickedEvent', ()=>{
            console.log('Card with id: ', event.detail.cardId, ' was clicked.')
        })
    </script>
    `
        : ''
    }
  `,
  );

export const WebComponent = Template.bind({});
