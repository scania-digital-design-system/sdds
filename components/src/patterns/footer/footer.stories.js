import readme from './readme.md';

export default {
  title: 'Patterns/Footer',
  argTypes: {
    text: {
      type: 'string',
      defaultValue: 'Copyright © Scania 2020'
    }
  },
  parameters: {
    notes: readme,
  },
};

const Template = ({text, socialItems, items}) => {
  return `
  <sdds-theme></sdds-theme>

  <div class="sdds-footer">
    <div class="sdds-footer-bottom">
      <ul class="sdds-footer-bottom-links">
        <li><a href="#">Legal link</a></li>
        <li><a href="#">Legal link</a></li>
        <li><a href="#">Legal link</a></li>
      </ul>
      <ul class="sdds-footer-social-links">
        <li><a href="#">Social 1</a></li>
        <li><a href="#">Social 1</a></li>
        <li><a href="#">Social 1</a></li>
      </ul>
      <div class="sdds-footer-bottom-brand">
        <p>Copyright &copy; 2021 Scania</p>
      </div>
    </div>
  </div>
  `
};

export const Basic = Template.bind({});
