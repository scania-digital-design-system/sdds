import CardPlaceholder from '../../stories/assets/image/card-placeholder.png';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Card',
  parameters: {
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
    bodyText: {
      name: 'Body text',
      description: 'The body text for the card',
      control: {
        type: 'text',
      },
    },
    bodyDivider: {
      name: 'Body divider',
      description: 'Add a divider to the card',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
      if: { arg: 'bodyImg', eq: false },
    },
    cardBottom: {
      name: 'Content of the bottom of the card',
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
    bodyImg: {
      name: 'Body image',
      description: 'Image in body on card.',
      control: {
        type: 'boolean',
      },
    },
    imageTop: {
      name: 'Image on top',
      description: 'Sets the image on top',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
      if: { arg: 'image', eq: true },
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
    modeVariant: {
      name: 'Mode variant',
      description: 'Change the components mode variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
  },
  args: {
    header: 'Header text',
    subheader: 'Subheader text',
    headerImg: true,
    headerPlacement: 'Above',
    bodyImg: false,
    bodyText: '',
    bodyDivider: false,
    cardBottom: '<sdds-icon style="font-size: 20px;" name="arrow_right"></sdds-icon>',
    modeVariant: 'Inherit from parent',
    clickable: false,
  },
};

const Template = ({
  header,
  subheader,
  cardBottom,
  clickable,
  bodyText,
  bodyDivider,
  headerPlacement,
  headerImg,
  modeVariant,
  bodyImg,
}) =>
  formatHtmlPreview(
    `
<style>
/* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 368px;
  }
</style>
    <div class="demo-wrapper">
          <div class="sdds-card${clickable ? ' sdds-clickable' : ''} ${
      modeVariant !== 'Inherit from parent' ? `sdds-mode-variant-${modeVariant}` : ''
    }">
            ${
              bodyImg === true && headerPlacement === 'Below'
                ? `<img class="sdds-card-img" src="${CardPlaceholder}" alt="Add description to image"/>`
                : ''
            }
            <div class="${headerImg ? 'sdds-card-header-avatar' : 'sdds-card-header'}">
            ${
              headerImg
                ? `
              <div class="sdds-card-avatar">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E2E2E4"/></svg>
              </div>`
                : ''
            }
                ${
                  headerImg
                    ? `<div class="sdds-card-headlines">
                  ${header ? `<h6 class="sdds-card-headline">${header}</h6>` : ''}
                  ${subheader ? `<h6 class="sdds-card-sub-headline" >${subheader}</h6>` : ''}
                  </div>`
                    : `${header ? `<h6 class="sdds-card-headline">${header}</h6>` : ''}
                 ${subheader ? `<h6 class="sdds-card-sub-headline" >${subheader}</h6>` : ''}
                `
                }
            </div>
            ${
              bodyImg === true && headerPlacement === 'Above'
                ? `<img class="sdds-card-img" src="${CardPlaceholder}" alt="Add description to image"/>`
                : ''
            }
            ${bodyDivider ? '<div class="sdds-divider-border-top"></div>' : ''}
            ${bodyText ? `<div class="sdds-card-body">${bodyText}</div>` : ''}
            ${cardBottom ? `<div class="sdds-card-footer">${cardBottom}</div>` : ''}
          </div>
    </div>
  `,
  );

export const Native = Template.bind({});
