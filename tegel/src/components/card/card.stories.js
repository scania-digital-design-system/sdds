import CardImage from '../../stories/assets/image/card-img.png';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Card',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    headline: {
      name: 'Header text',
      description: 'The header text',
      defaultValue: 'Header text',
      control: {
        type: 'text',
      },
    },
    subheadline: {
      name: 'Subheader text',
      description: 'The subheader text',
      defaultValue: 'Subheader text',
      control: {
        type: 'text',
      },
    },
    footer: {
      name: 'Footer',
      description: 'The footer of the card',
      // TODO - Is dependant on font component
      defaultValue: '<sdds-icon style="font-size: 20px;" name="scania-arrow"></sdds-icon>',
      control: {
        type: 'text',
      },
    },
    clickable: {
      name: 'Clickable',
      description: 'Toggles if the card is clickable or not.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const CardTemplate = ({ headline, subheadline, footer, clickable, text, divider, imageTop }) =>
  formatHtmlPreview(
    `
<style> 
  .demo-wrapper {
    width: 300px;
  }
</style>
    <div class="demo-wrapper">
          <div class="sdds-card${clickable ? ' sdds-clickable' : ''}">
            ${imageTop == true ? `<img class="sdds-card-img" src="${CardImage}" />` : ''}
            <div class="sdds-card-header">
              ${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ''}
              ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ''}
            </div>
            ${imageTop == false ? `<img class="sdds-card-img" src="${CardImage}" />` : ''}
            ${divider ? '<div class="sdds-divider-light-border-top"></div>' : ''}
            ${text ? `<div class="sdds-card-body">${text}</div>` : ''}
            ${footer ? `<div class="sdds-card-footer">${footer}</div>` : ''}
          </div>
    </div>
  `,
  );

export const Default = CardTemplate.bind({});

Default.args = {};

export const SupportText = CardTemplate.bind({});

SupportText.args = {
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
};

export const Divider = CardTemplate.bind({});

Divider.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
};

export const link = CardTemplate.bind({});

link.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  footer: '<a class="sdds-link sdds-link--no-underline" href="#">Link text</a><a class="sdds-link sdds-link--no-underline" href="#">Link text</a>',
};

export const button = CardTemplate.bind({});

button.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  footer: '<button class="sdds-btn sdds-btn-sm sdds-btn-primary">Button text</button>',
};

export const Image = CardTemplate.bind({});

Image.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  imageTop: true,
};

const AvatarTemplate = ({ headline, subheadline, footer, clickable, text, divider, imageTop, avatar }) =>
  formatHtmlPreview(
    `  
    <style> 
  .demo-wrapper {
    width: 300px;
  }
</style>
    <div class="demo-wrapper">
      <div class="sdds-card ${clickable ? 'sdds-clickable' : ''}">
      ${imageTop == true ? `<img class="sdds-card-img" src="${CardImage}" />` : ''}
      <div class="sdds-card-header-avatar">
        ${avatar ? `<div class="sdds-card-avatar">${avatar}</div>` : ''}
        <div class="sdds-card-headlines">
          ${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ''}
          ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ''}
        </div>
      </div>
      ${imageTop == false ? `<img class="sdds-card-img" src="${CardImage}" />` : ''}
      ${divider ? "<div class='sdds-divider-light-border-top'></div>" : ''}
      ${text ? `<div class="sdds-card-body">${text}</div>` : ''}
      ${footer ? `<div class="sdds-card-footer">${footer}</div>` : ''}
    </div>
    </div>
  `,
  );
export const Avatar = AvatarTemplate.bind({});

Avatar.args = {
  avatar: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E2E2E4"/></svg>',
  divider: false,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  imageTop: false,
};
