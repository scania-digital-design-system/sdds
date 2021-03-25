export default {
  title: 'component/Modal'
};
const ModalTemplate = ({}) => {
  return `
  <sdds-theme></sdds-theme>
  <sdds-modal>
    <div name="modal">Slot modal</div>
  </sdds-modal>

  <button class="sdds-btn sdds-btn-primary">Open modal</button>
  `
};

export const Modal = ModalTemplate.bind();