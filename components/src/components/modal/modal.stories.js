export default {
  title: 'component/Modal',
  args: {
    preventBackdrop: false,
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
  },
};

const ModalTemplate = ({ ...Modal }) => {
  return `

  <sdds-theme></sdds-theme>
  <button onclick="console.log('Open modal 1')" id="modal1" class="sdds-btn sdds-btn-primary">Open modal 1</button>
  <sdds-modal size="${Modal.size}" selector="#modal1" ${
    Modal.preventBackdrop == true ? 'prevent' : ''
  } >
    <h5 slot="sdds-modal-headline">${Modal.Headline}</h5>
      <p slot="sdds-modal-body">
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
      </p>
      <button slot="sdds-modal-actions" modal-dismiss onclick="console.log('delete')" class="sdds-btn sdds-btn-danger sdds-btn-md">Delete</button>
      <button slot="sdds-modal-actions" modal-dismiss onclick="console.log('cancel')" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </sdds-modal>

  <sdds-modal size="${Modal.size}" selector="#modal2" ${
    Modal.preventBackdrop == true ? 'prevent' : ''
  } >
    <h5 slot="sdds-modal-headline">${Modal.Headline}</h5>
    <div slot="sdds-modal-body">
      Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
    </div>
    <button slot="sdds-modal-actions" onclick="console.log('save')" class="sdds-btn sdds-btn-primary sdds-btn-md">Save</button>
    <button slot="sdds-modal-actions" modal-dismiss onclick="console.log('cancel')" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </sdds-modal>

  <button onclick="console.log('Open modal 2')" id="modal2" class="sdds-btn sdds-btn-primary">Open modal 2</button>

  `;
};

export const Modal = ModalTemplate.bind();

Modal.args = {
  size: 'md',
  Headline: 'Headline 1',
};

const ModalCssTemplate = ({ ...ModalCSS }) => {
  return `
  <sdds-theme></sdds-theme>
  <div class='sdds-modal-backdrop show'>
    <div class='sdds-modal sdds-modal-${ModalCSS.size}'>
      <div class="sdds-modal-header">
        <div class="sdds-modal-headline">
          <h5>${ModalCSS.Headline}</h5>
        </div>
        <span class="sdds-modal-btn"></span>
      </div>
        <div class="sdds-modal-body">
          <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.</p>
        </div>
        <div class="sdds-modal-actions">
          <div class="sdds-modal-actions">
            <button class="sdds-btn sdds-btn-primary sdds-btn-md">Save</button>
            <button class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
          </div>
        </div>
    </div>
  </div>
  `;
};

export const ModalCSS = ModalCssTemplate.bind();

ModalCSS.args = {
  size: 'md',
  Headline: 'Headline 1',
};

ModalCSS.argTypes = {
  preventBackdrop: {
    table: {
      disable: true,
    },
  },
};
