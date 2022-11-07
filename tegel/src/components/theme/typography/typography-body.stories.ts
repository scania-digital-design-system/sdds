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
  <p class='sdds-body-01'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p class='sdds-body-02'>
  Nulla at volutpat diam ut venenatis. Nullam ac tortor vitae purus faucibus ornare. Mauris nunc congue nisi vitae suscipit tellus mauris. 
  </p>
  `,
  );

export const Body = Template.bind({});
