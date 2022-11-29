import '@scania/typography/dist/css/selectors.css';
import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () =>
  formatHtmlPreview(
    `
  <p class='sdds-detail-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-02'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-03'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-04'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-05'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-06'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-07'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  `,
  );

export const Detail = Template.bind({});
