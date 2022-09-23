import readme from './readme.md';

export default {
  title: 'Foundation/Typography',
  parameters: {
    notes: readme,
    layout: 'fullscreen',
  },
};

const Template = ({ content }) => `
  ${content}
  `;

export const Headlines = Template.bind({});
Headlines.args = {
  content: `
  <h1>Headline</h1>
  <h2>Headline</h2>
  <h3>A headline for page layouts</h3>
  <h4>A headline for page layouts</h4>
  <h5>A sub headline, which is most commonly paired with body-01</h5>
  <h6>A sub headline, which is most commonly paired with body-02</h6>
  <h7>A sub headline, which is most commonly paired with detail-02 </h7>
  `,
};

export const Body = Template.bind({});
Body.args = {
  content: `
  <p class='sdds-body-01'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p class='sdds-body-02'>
  Nulla at volutpat diam ut venenatis. Nullam ac tortor vitae purus faucibus ornare. Mauris nunc congue nisi vitae suscipit tellus mauris. 
  </p>
  `,
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  content: `
  <p class='sdds-paragraph-01'>Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Dui nunc mattis enim ut tellus elementum sagittis vitae. </p>
  <p class='sdds-paragraph-02'>Sapien pellentesque habitant morbi tristique senectus et netus et. Ut tellus elementum sagittis vitae et. Scelerisque varius morbi enim nunc faucibus. Volutpat diam ut venenatis tellus in.</p>
  `,
};

export const Detail = Template.bind({});
Detail.args = {
  content: `
  <p class='sdds-detail-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-02'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-03'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-04'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-05'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-06'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-07'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  `,
};

export const ExpressiveHeadline = Template.bind({});
ExpressiveHeadline.args = {
  content: `
  <p class='sdds-expressive-headline-01'>Headline</p>
  <p class='sdds-expressive-headline-02'>Headline</p>
  `,
};
