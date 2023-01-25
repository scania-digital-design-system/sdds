import CardImage from '../../stories/assets/image/card-img.png';
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
    headline: {
      name: 'Header text',
      description: 'The header text',
      control: {
        type: 'text',
      },
    },
    subheadline: {
      name: 'Subheader text',
      description: 'The subheader text',
      control: {
        type: 'text',
      },
    },
    text: {
      name: 'Body text',
      description: 'The body text for the card',
      control: {
        type: 'text',
      },
    },
    divider: {
      name: 'Divider',
      description: 'Add a divider to the card',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    footer: {
      name: 'Footer',
      description: 'The footer of the card',
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
    image: {
      name: 'Image',
      description: 'Image on card',
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
    avatar: {
      name: 'Avatar',
      description: 'An avatar image for the card',
      control: {
        type: 'boolean',
      },
    },
    modeVariant: {
      name: 'Mode variant',
      description: 'Change the components mode variant',
      control: {
        type: 'radio',
      },
      options: ['Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
  args: {
    headline: 'Header text',
    subheadline: 'Subheader text',
    text: '',
    divider: false,
    footer: '<sdds-icon style="font-size: 20px;" name="arrow_left"></sdds-icon>',
    clickable: false,
    image: false,
    imageTop: false,
    avatar: false,
    modeVariant: 'Primary',
  },
};

const Template = ({ headline, subheadline, footer, clickable, text, divider, imageTop, avatar, modeVariant }) =>
  formatHtmlPreview(
    `
<style>
/* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 300px;
  }
</style>
    <div class="demo-wrapper">
          <div class="sdds-card${clickable ? ' sdds-clickable' : ''} ${modeVariant === 'Secondary' ? 'sdds-mode-variant-secondary' : '.sdds-mode-variant-primary'}">
            ${
              imageTop === true
                ? `<img class="sdds-card-img" src="${CardImage}" alt="Add description to image"/>`
                : ''
            }
            <div class="${avatar ? 'sdds-card-header-avatar' : 'sdds-card-header'}">
            ${
              avatar
                ? `
              <div class="sdds-card-avatar">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E2E2E4"/></svg>
              </div>`
                : ''
            }
                ${
                  avatar
                    ? `<div class="sdds-card-headlines">
                  ${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ''}
                  ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ''}
                  </div>`
                    : `${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ''}
                 ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ''}
                `
                }
            </div>
            ${
              imageTop === false
                ? `<img class="sdds-card-img" src="${CardImage}" alt="Add description to image"/>`
                : ''
            }
            ${divider ? '<div class="sdds-divider-border-top"></div>' : ''}
            ${text ? `<div class="sdds-card-body">${text}</div>` : ''}
            ${footer ? `<div class="sdds-card-footer">${footer}</div>` : ''}
          </div>
    </div>
  `,
  );

export const Default = Template.bind({});
Default.args = {};

export const SupportText = Template.bind({});

SupportText.args = {
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
};

export const Divider = Template.bind({});

Divider.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
};

export const Link = Template.bind({});

Link.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  footer:
    '<a class="sdds-link sdds-link--no-underline" href="#">Link text</a><a class="sdds-link sdds-link--no-underline" href="#">Link text</a>',
};

export const Button = Template.bind({});

Button.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  footer: '<button class="sdds-btn sdds-btn-sm sdds-btn-primary">Button text</button>',
};

export const Image = Template.bind({});

Image.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  image: true,
  imageTop: true,
};

export const Avatar = Template.bind({});

Avatar.args = {
  avatar: true,
  divider: false,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  imageTop: false,
};