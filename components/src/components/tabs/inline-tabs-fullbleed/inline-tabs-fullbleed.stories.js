export default {
  title: 'Component/Tabs/Inline Tabs (full bleed)',
  parameters: {
    layout: 'fullpage',
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
  },
};

const Template = ({ modeVariant }) => `
  <sdds-inline-tabs-fullbleed id="inline-tabs-fullbleed-example" mode-variant="${modeVariant.toLowerCase()}">
    <a href="#">Tab name</a>
    <a href="#" class="sdds-inline-tabs-fullbleed--tab__active">Tab name</a>
    <a href="#">Tab name</a>
    <a href="#">Tab name</a>
    <a class="sdds-inline-tabs-fullbleed--tab__disabled" href="#">Disabled tab</a>
  </sdds-inline-tabs-fullbleed>
`;

export const Basic = Template.bind({});
Basic.args = {};

let DOMContentLoaded = false;
document.addEventListener('DOMContentLoaded', () => {
  if (DOMContentLoaded) {
    return;
  }
  DOMContentLoaded = true;

  const links = document.querySelectorAll('#inline-tabs-fullbleed-example a');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log('clicked link!');
      e.preventDefault();
      console.log(e.target);
      e.target.classList.toggle('sdds-inline-tabs-fullbleed--tab__active');
    });
  });
});
