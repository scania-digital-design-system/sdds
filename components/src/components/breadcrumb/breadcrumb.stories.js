export default {
  title: 'Component/Breadcrumb',
};

const Template = () => `   
    <div class="sdds-breadcrumb">
      <div class="sdds-breadcrumb-item"><a href="#">Page 1</a></div>
      <div class="sdds-breadcrumb-item"><a href="#">Page 2</a></div>
      <div class="sdds-breadcrumb-item sdds-breadcrumb-item-current"><a aria-current="page">Page 3</a></div>
    </div>
    `;

export const Basic = Template.bind({});

Basic.args = {};
