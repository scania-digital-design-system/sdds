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
    headerPlacement: {
      name: 'Header placement',
      description: 'Placement of the header',
      control: {
        type: 'radio',
      },
      options: ['Above', 'Below'],
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
      description: 'DESCRIPTON',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    bodyImg: {
      name: 'Image',
      description: 'Image in body on card.',
      control: {
        type: 'boolean',
      },
    },
    imageTop: {
      name: 'Image on top',
      description: 'Sets the image on top',
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
    headerPlacement: 'Above',
    header: 'Header text',
    subheader: 'Subheader text',
    bodyContent:
      '<p>This is a short and consist detail text describing for the user what this text is really about.</p>',
    clickable: false,
    bodyDivider: false,
    headerImg: 'https://www.svgrepo.com/show/170303/avatar.svg',
    bodyImg: CardImage,
    cardBottom: `<div slot="card-bottom"><sdds-button text="Button text"></sdds-button></div>`,
  },
};

const Template = ({
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
        header-placement="${headerPlacement.toLowerCase()}"
        header="${header}"
        subheader="${subheader}"
        header-img="${headerImg}"
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
        document.addEventListener('cardClickedEvent', ()=>{
            console.log('Card with id: ', event.detail.cardId, ' was clicked.')
        })
    </script>
    `
        : ''
    }
  `,
  );

export const WebComponent = Template.bind({});
