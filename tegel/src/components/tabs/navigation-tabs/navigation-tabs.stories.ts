import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/Tabs/Navigation Tabs',
  parameters: {},
};

const Template = () =>
  formatHtmlPreview(`
    <sdds-navigation-tabs id="navigation-tabs-example">
      <a href="#" class="sdds-navigation-tabs--tab__active">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#" class="sdds-navigation-tabs--tab__disabled">Disabled tab</a>
    </sdds-navigation-tabs>
    `);

export const Basic = Template.bind({});
Basic.args = {};

let DOMContentLoaded = false;
document.addEventListener('DOMContentLoaded', () => {
  if (DOMContentLoaded) {
    return;
  }
  DOMContentLoaded = true;

  const links = document.querySelectorAll('#navigation-tabs-example a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      console.log('glick');
      e.preventDefault();
      console.log(e.target);
      (e.target as HTMLElement).classList.toggle('sdds-navigation-tabs--tab__active');
    });
  });
});
