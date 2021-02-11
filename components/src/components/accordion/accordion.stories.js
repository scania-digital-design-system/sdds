export default {
  title: 'Component/Accordion'
};

const Template = ({disabled='', affix='suffix'}) => {
  return `
  <c-theme name="scania"></c-theme>
  <div class="container-demo" style="width:500px; padding:var(--sdds-spacing-layout-48);">
    <ul class="sdds-accordion">
      <li class="sdds-accordion-item sdds-divider-light-border-top sdds-divider-light-border-bottom ${disabled}" tabindex="1">
        <div class="sdds-accordion-header-${affix}">
          <div class="sdds-accordion-title">Accordion header</div>
          <div class="sdds-accordion-icon">
            <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/>
            </svg>
          </div>
        </div>        
        <div class="sdds-accordion-panel">
          <p>
            This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
          </p>
        </div>
      </li>

      <li class="open sdds-accordion-item sdds-divider-light-border-bottom ${disabled}" tabindex="1">
        <div class="sdds-accordion-header-${affix}">
          <div class="sdds-accordion-title">Accordion header 2</div>
          <div class="sdds-accordion-icon">
            <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/>
            </svg>
          </div>
        </div>        
        <div class="sdds-accordion-panel">
          <p>
            This is the open panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
          </p>
        </div>
      </li>

    </ul>
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
  disabled: 'disabled'
}

