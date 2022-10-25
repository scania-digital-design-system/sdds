import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/Tabs/Navigation Tabs',
};

const Template = () =>
  formatHtmlPreview(`
    <sdds-navigation-tabs>
      <a href="#" class="sdds-navigation-tabs--tab__active">Active tab</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#" class="sdds-navigation-tabs--tab__disabled">Disabled tab</a>
    </sdds-navigation-tabs>
    `);

export const Basic = Template.bind({});
Basic.args = {};
