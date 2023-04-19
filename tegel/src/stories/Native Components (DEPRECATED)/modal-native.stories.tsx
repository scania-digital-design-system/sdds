import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Modal',
  parameters: {
    layout: 'fullscreen',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=4398%3A181325&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=4398%3A181325&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    actions: {
      name: 'Actions',
      description: 'Defines the behaviour of modal.',
      control: {
        type: 'radio',
      },
      options: ['Sticky', 'Static'],
      table: {
        defaultValue: { summary: 'Static' },
      },
    },
    size: {
      name: 'Size',
      description: 'Sets the size of modal.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      table: {
        defaultValue: { summary: 'Large' },
      },
    },
    headline: {
      name: 'Modal headline',
      description: 'Sets the headline of the modal.',
      control: {
        type: 'text',
      },
    },
    bodyText: {
      name: 'Modal body text',
      description: 'Sets the body text of the modal.',
      control: {
        type: 'text',
      },
    },
    showModal: {
      name: 'Show modal',
      description: 'Toggles if the modal is displayed.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
  },
  args: {
    actions: 'Static',
    size: 'Large',
    headline: 'The buttons for the modal only works in the canvas tab',
    bodyText:
      'The steps fell lightly and oddly, with a certain swing, for all they went so slowly; it was different indeed from the heavy creaking tread of Henry Jekyll. Utterson sighed. “Is there never anything else?” he asked.',
    showModal: true,
  },
};

const sizeLookUp = {
  'Large': 'lg',
  'Medium': 'md',
  'Small': 'sm',
  'Extra small': 'xs',
};

const Template = ({ actions, size, headline, bodyText, showModal }) =>
  formatHtmlPreview(
    `    <style>
  /* demo-wrapper and demo-styles is for demonstration purposes only*/
  .demo-wrapper {
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
  }
  .demo-styles {
    position: absolute;
    margin-bottom: 20px;
  }
  </style>

  <div class="demo-wrapper">
    <button id="modal-button" class="sdds-btn sdds-btn-primary sdds-btn-lg">
      <span class="sdds-btn-text">Open modal</span>
    </button>
    <div id="my-modal" class="sdds-modal-backdrop ${showModal ? 'show' : 'hide'} demo-styles">
      <div class="sdds-modal sdds-modal-${
        sizeLookUp[size]
      } sdds-modal__actions-${actions.toLowerCase()}">
        <div class="sdds-modal-header">
          <h5 class="sdds-modal-headline">${headline}</h5>
          <button class="sdds-modal-close" aria-label="close">
            <sdds-icon name="cross" size="20px"></sdds-icon>
          </button>
        </div>
          <div class="sdds-modal-body">
            <p class="sdds-u-mb0 sdds-u-mt0">${bodyText}</p>
          </div>
          <div class="sdds-modal-actions">
              <button class="sdds-btn sdds-btn-primary sdds-btn-md">Save</button>
              <button class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
          </div>
      </div>
    </div>
  </div>

  <script>
  /* Note: Code below is used only for inspiration and presentation purposes in Storybook */
  modal = document.getElementById('my-modal');
  buttons = modal.getElementsByTagName('button');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      modal.classList.replace('show', 'hide')
    })
  }

  document.getElementsByClassName('sdds-modal-close')[0].addEventListener('click', () => {
    modal.classList.replace('show', 'hide');
  })

  document.getElementById('modal-button').addEventListener('click', () => {
    modal.classList.replace('hide', 'show')
  })
  </script>
  `,
  );

export const Native = Template.bind({});
