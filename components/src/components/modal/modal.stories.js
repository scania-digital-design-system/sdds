export default {
  title: 'component/Modal'
};
const ModalTemplate = ({preventBackdrop}) => {
  return `
  <sdds-theme></sdds-theme>
  <sdds-modal selector="#modal1" ${preventBackdrop == true? 'prevent':''} >
    <h5 slot="sdds-modal-headline">Headline 1</h5>
    <div slot="sdds-modal-body">Modal 1</div>
  </sdds-modal>

  <button id="modal1" class="sdds-btn sdds-btn-primary">Open modal</button>
  <sdds-modal selector="#modal2" ${preventBackdrop == true? 'prevent':''} >
    <h5 slot="sdds-modal-headline">Headline 2</h5>
    <p slot="sdds-modal-body">
      Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
    </p>
  <div slot="sdds-modal-actions">
    <button class="sdds-btn sdds-btn-primary sdds-btn-md" style="margin-right:16px">Save</button>
    <button onclick="() => { console.log('save')}" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </div>
</sdds-modal>

<button onclick="console.log('testing')" id="modal2" class="sdds-btn sdds-btn-primary">Open modal</button>
  `
};

export const Modal = ModalTemplate.bind();

Modal.args = {
  preventBackdrop: false
}