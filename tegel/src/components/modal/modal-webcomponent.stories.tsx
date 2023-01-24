import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Modal',
  parameters: {
    layout: 'fullscreen',
    notes: readme,
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
      description: 'Sets the size of the modal.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      table: {
        defaultValue: {
          summary: 'Large',
        },
      },
    },
    actions: {
      name: 'Actions',
      description: 'Sets the behaviour of the modal actions.',
      control: {
        type: 'radio',
      },
      options: ['Sticky', 'Static'],
      table: {
        defaultValue: {
          summary: 'Static',
        },
      },
    },
    headline: {
      name: 'Modal headline',
      description: 'Sets the modals headline.',
      control: {
        type: 'text',
      },
    },
    bodyText: {
      name: 'Modal body text',
      description: 'Sets the modals body text.',
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
        defaultValue: {
          summary: true,
        },
      },
    },
  },
  args: {
    size: 'Large',
    actions: 'Static',
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

const ModalTemplate = ({ size, headline, bodyText, actions, showModal }) =>
  formatHtmlPreview(
    `
  <button id="my-modal-button" class="sdds-btn sdds-btn-primary">Open modal</button>

  <sdds-modal id="my-modal" size="${sizeLookUp[size]}" actions="${actions.toLowerCase()}" ${showModal ? 'open' : ''}>
      <h5 class="sdds-modal-headline" slot="sdds-modal-headline">${headline}</h5>
      <span slot="sdds-modal-body">
          ${bodyText}
      </span>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('delete')" class="sdds-btn sdds-btn-danger sdds-btn-md">Delete</button>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('cancel')" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </sdds-modal>
  <script>

    document.getElementById('my-modal-button').addEventListener('click', () => {
      document.getElementById('my-modal').open = true;
    })
  </script>

  `,
  );

export const WebComponent = ModalTemplate.bind({});

WebComponent.args = {};
