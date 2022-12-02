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
      description: 'Size of modal',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
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
  },
};

const sizeLookUp = {
  'Large': 'lg',
  'Medium': 'md',
  'Small': 'sm',
  'Extra small': 'xs',
};

const ModalTemplate = ({ size, headline, actions }) =>
  formatHtmlPreview(
    `
  <button onclick="console.log('Open modal 1')" class="sdds-btn sdds-btn-primary modal1">Open modal</button>  

  <sdds-modal id="modal-test" size="${
    sizeLookUp[size]
  }" selector=".modal1" actions="${actions.toLowerCase()}">
      <h5 class="sdds-modal-headline" slot="sdds-modal-headline">${headline}</h5>
      <div class="sdds-modal-body" slot="sdds-modal-body">
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
      </div>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('delete')" class="sdds-btn sdds-btn-danger sdds-btn-md">Delete</button>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('cancel')" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </sdds-modal>
  
  `,
  );

export const WebComponent = ModalTemplate.bind({});

WebComponent.args = {};
