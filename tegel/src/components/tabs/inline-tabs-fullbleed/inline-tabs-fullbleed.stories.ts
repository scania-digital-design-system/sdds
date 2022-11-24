import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: readme,
  },
};

const Template = () =>
  formatHtmlPreview(`
    <sdds-inline-tabs-fullbleed>
      <a href="#">Tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab__active">Active tab</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab__disabled">Disabled tab</a>
    </sdds-inline-tabs-fullbleed>
`);

export const InlineTabsFullbleed = Template.bind({});
InlineTabsFullbleed.args = {};
