import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: readme,
  },
};

// Why role="link" on a disabled link: https://www.scottohara.me/blog/2021/05/28/disabled-links.html
const Template = () =>
  formatHtmlPreview(`
    <sdds-navigation-tabs>
      <a href="#" class="sdds-navigation-tabs--tab__active">Active tab</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a role="link" aria-disabled="true" class="sdds-navigation-tabs--tab__disabled">Disabled tab</a>
    </sdds-navigation-tabs>
    `);

export const NavigationTabs = Template.bind({});
NavigationTabs.args = {};
