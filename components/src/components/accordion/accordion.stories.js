export default {
  title: 'Component/Accordion',
  argTypes: {
    affix: {
      defaultValue: 'suffix',
      table: {
        disable:true
      }
    },
  }
};

const Template = ({disabled=false, affix='suffix'}) => {
  return `
  <c-theme name="scania"></c-theme>
  <div class="container-demo" style="width:500px; padding:var(--sdds-spacing-layout-48);">
    <sdds-accordion>
      <sdds-accordion-item header="First item" affix="${affix}" disabled="${disabled}" tabindex="1">
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Second item" affix="${affix}" disabled="${disabled}" expanded="true"  tabindex="1">
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
      </sdds-accordion-item>
    </sdds-accordion>
  </div>
  `
};

export const Suffix = Template.bind({});
Suffix.args = {
  affix: 'suffix'
};

export const Prefix = Template.bind({});
Prefix.args = {
  affix: 'prefix'
};

export const Disabled = Template.bind({}) ;
Disabled.args = {
  disabled: true
}

