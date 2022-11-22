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
};

const ModalCssTemplate = ({ ...ModalCSS }) => `
  <style>
  /* The demo-text class is only for demonstration purposes. */
  .demo-styles {
    position: relative;
    padding: 60px 0;
    margin: -30px -20px 0px -20px;
    width: auto;
  }
  </style>

  <div class="sdds-modal-backdrop demo-styles">
    <div class="sdds-modal sdds-modal-${ModalCSS.size} sdds-modal__actions-${ModalCSS.actions}">
      <div class="sdds-modal-header">
       
          <h5 class="sdds-modal-headline">${ModalCSS.headline}</h5>
       
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
  `;

export const Native = ModalCssTemplate.bind({});

Native.args = {};
