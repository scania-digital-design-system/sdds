export default {
  title: 'Component/Tabs/Inline Tabs (full bleed) Test',
  parameters: {
    //layout: 'fullscreen',
  },
  argTypes: {
    tabs: {
      name: 'Number of tabs',
      control: {
        type: 'range',
        min: 2,
        max: 6,
        step: 1,
      },
      defaultValue: 3,
    },
  },
  args: {
    headline: 'Header',
    content: '<p class="sdds-body-02">Content goes here</p>',
  },
};

const Template = ({ headline, content, tabs = 3 }) => `

<div class="sdds-containerbox">
<h2 class="sdds-headline-02">${headline}</h2>

<sdds-inline-tabs-fullbleed id="inline-tabs-fullbleed-example">
<a href="#">Tab name</a>
<a class="sdds-inline-tabs-fullbleed--tab__disabled" href="#">Disabled tab</a>
${tabs >= 3 ? `<a href="#">Tab name</a>` : ''}
${tabs >= 4 ? `<a href="#">Tab name</a>` : ''}
${tabs >= 5 ? `<a href="#">Tab name</a>` : ''}
${tabs >= 6 ? `<a href="#">Tab name</a>` : ''}
</sdds-inline-tabs-fullbleed>

<div>
${content}
</div>

</div>
`;

export const Basic = Template.bind({});
Basic.args = {};

let DOMContentLoaded = false;
document.addEventListener('DOMContentLoaded', () => {
  if (DOMContentLoaded) {
    return;
  }
  DOMContentLoaded = true;

  const links = document.querySelectorAll('#inline-tabs-fullbleed-example a');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log('clicked link!');
      e.preventDefault();
      console.log(e.target);
      e.target.classList.toggle('sdds-inline-tabs-fullbleed--tab__active');
    });
  });
});
