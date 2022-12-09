import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Modal',
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
    size: {
      name: 'Size',
      description: 'Size of modal',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
    },
    showModal: {
      name: 'Show modal',
      description: 'Toggle if the modal is displayed',
      control: {
        type: 'boolean',
      },
    },
    actions: {
      name: 'Actions',
      description: 'Behaviour of modal actions',
      control: {
        type: 'radio',
      },
      options: ['Sticky', 'Static'],
    },
    headline: {
      name: 'Modal headline',
      description: 'Customize headline',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    headline: 'The buttons for the modal only works in the canvas tab',
    actions: 'Static',
    size: 'Large',
    showModal: true,
  },
};

const sizeLookUp = {
  'Large': 'lg',
  'Medium': 'md',
  'Small': 'sm',
  'Extra small': 'xs',
};

const Template = ({ headline, size, actions, showModal }) =>
  formatHtmlPreview(
    `    <style>
  /* demo-wrapper and demo-styles is for demonstration purposes only*/
  .demo-wrapper {
    position: relative;
    top: 0;
    left: 0;
    height: 500px;
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
          <span class="sdds-modal-btn"></span>
        </div>
          <div class="sdds-modal-body">
            <p>
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
            </p>
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

  document.getElementsByClassName('sdds-modal-btn')[0].addEventListener('click', () => {
    modal.classList.replace('show', 'hide');
  })

  document.getElementById('modal-button').addEventListener('click', () => {
    modal.classList.replace('hide', 'show')
  })
  </script>
  `,
  );

export const Native = Template.bind({});

Native.args = {};
