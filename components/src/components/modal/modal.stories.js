export default {
  title: 'component/Modal'
};
const ModalTemplate = ({preventBackdrop}) => {
  return `
  <sdds-theme></sdds-theme>
  <sdds-modal ${preventBackdrop == true? 'prevent':''} >
    <div name="modal">Slot modal</div>
  </sdds-modal>

  <button class="sdds-btn sdds-btn-primary">Open modal</button>
  `
};

export const Modal = ModalTemplate.bind();

Modal.args = {
  preventBackdrop: false
}