import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/Tabs/Inline Tabs (full bleed)',
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

export const Default = Template.bind({});
Default.args = {};
