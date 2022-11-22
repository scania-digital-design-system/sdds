import readme from './readme.md';

export default {
  title: 'Components/Modal',
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of modal',
      control: {
        type: 'radio',
        options: ['lg', 'md', 'sm', 'xs'],
        labels: {
          lg: 'Large',
          md: 'Medium',
          sm: 'Small',
          xs: 'Extra Small',
        },
      },
      defaultValue: 'md',
    },
    actions: {
      name: 'Actions',
      description: 'Behaviour of modal actions',
      control: {
        type: 'radio',
        options: ['sticky', 'static'],
        labels: {
          sticky: 'Sticky',
          static: 'Static',
        },
      },
      defaultValue: 'static',
    },
    headline: {
      name: 'Modal headline',
      description: 'Customize headline',
      control: {
        type: 'text',
      },
      defaultValue: 'Headline',
    },
  },
  parameters: {
    notes: readme,
  },
};

const ModalTemplate = ({ ...Modal }) => `
  <button onclick="console.log('Open modal 1')" class="sdds-btn sdds-btn-primary modal1">Open modal</button>  
  
  <sdds-modal id="modal-test" size="${Modal.size}" selector=".modal1" actions="${Modal.actions}" >
      <h5 class="sdds-modal-headline" slot="sdds-modal-headline">${Modal.headline}</h5>
      <div class="sdds-modal-body" slot="sdds-modal-body">
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
      </div>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('delete')" class="sdds-btn sdds-btn-danger sdds-btn-md">Delete</button>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('cancel')" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </sdds-modal>
  `;

export const WebComponent = ModalTemplate.bind({});

WebComponent.args = {};
