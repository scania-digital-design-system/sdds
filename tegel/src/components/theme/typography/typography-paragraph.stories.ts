import '@scania/typography/dist/css/selectors.css';
import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
};

const Template = () =>
  formatHtmlPreview(
    `
        <p class='sdds-paragraph-01'>Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Dui nunc mattis enim ut tellus elementum sagittis vitae. </p>
        <p class='sdds-paragraph-02'>Sapien pellentesque habitant morbi tristique senectus et netus et. Ut tellus elementum sagittis vitae et. Scelerisque varius morbi enim nunc faucibus. Volutpat diam ut venenatis tellus in.</p>
  `,
  );

export const Paragraph = Template.bind({});
