export default {
  title: 'Component/Tabs/Navigation Tabs',
  parameters: {
    layout: 'fullpage',
  },
};

const Template = () => `
    <sdds-navigation-tabs id="navigation-tabs-example">
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#" class="sdds-navigation-tabs--tab__disabled">Disabled tab</a>
    </sdds-navigation-tabs>
    `;

export const Basic = Template.bind({});
Basic.args = {};

let DOMContentLoaded = false;
document.addEventListener('DOMContentLoaded', () => {
  if (DOMContentLoaded) {
    return;
  }
  DOMContentLoaded = true;

  const links = document.querySelectorAll('#navigation-tabs-example a');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log('glick');
      e.preventDefault();
      console.log(e.target);
      e.target.classList.toggle('sdds-navigation-tabs--tab__active');
    });
  });
});
