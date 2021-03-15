export default {
  title: 'Component/Card'
};

const style =`<style>
.demo {
  margin: auto;
  margin-top: 50px;
}
</style>`;

const CardTemplate = ({...Basic}) => {
  return `
  ${style}
    <c-theme></c-theme>
    <div class="sdds-container">
      <div class="sdds-row demo">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">

          <div class="sdds-card">
            <div class="sdds-card-header">
              <h6 class="sdds-card-headline">Header text</h6>
              <h6 class="sdds-card-sub-headline" >Subheader text</h6>
            </div>
            <div class="sdds-card-footer"><c-icon style="font-size: 20px;" name="scania-arrow"></c-icon></div>
          </div>

        </div>

        <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">

          <div class="sdds-card">
            <div class="sdds-card-header">
              <h6 class="sdds-card-headline">Header text</h6>
              <h6 class="sdds-card-sub-headline" >Subheader text</h6>
            </div>
            <div class="sdds-card-body">This is a short and consist detail text describing for the user what this text is really about.</div>
            <div class="sdds-card-footer"><c-icon style="font-size: 20px;" name="scania-arrow"></c-icon></div>
          </div>

        </div>

        <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">

          <div class="sdds-card">
            <div class="sdds-card-header">
              <h6 class="sdds-card-headline">Header text</h6>
              <h6 class="sdds-card-sub-headline" >Subheader text</h6>
            </div>
            <div class="sdds-divider-light-border-top"></div>
            <div class="sdds-card-body">This is a short and consist detail text describing for the user what this text is really about.</div>
            <div class="sdds-card-footer"><c-icon style="font-size: 20px;" name="scania-arrow"></c-icon></div>
          </div>

        </div>
      </div>

      <div class="sdds-row demo">

        <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">

          <div class="sdds-card">
            <div class="sdds-card-header">
              <h6 class="sdds-card-headline">Header text</h6>
              <h6 class="sdds-card-sub-headline" >Subheader text</h6>
            </div>
            <div class="sdds-divider-light-border-top"></div>
            <div class="sdds-card-body">This is a short and consist detail text describing for the user what this text is really about.</div>
            <div class="sdds-card-footer"><a href="#">Link text</a></div>
          </div>

        </div>

         <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">

          <div class="sdds-card">
            <div class="sdds-card-header">
              <h6 class="sdds-card-headline">Header text</h6>
              <h6 class="sdds-card-sub-headline" >Subheader text</h6>
            </div>
            <img class="sdds-card-image" src="/Users/mmexvr/Documents/dev/sdds/components/src/components/card/test.png" />
            <div class="sdds-divider-light-border-top"></div>
            <div class="sdds-card-body">This is a short and consist detail text describing for the user what this text is really about.</div>
            <div class="sdds-card-footer"><a href="#">Link text</a></div>
          </div>

        </div>
      </div>

      <div class="sdds-row demo">
        <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">
          <div class="sdds-card">
            <div class="sdds-card-header">
              <h3 class="sdds-card-headline">Header text</h3>
              <h3 class="sdds-card-sub-headline" >Subheader text</h3>
            </div>
        </div>
    </div>

  `
};

export const Basic = CardTemplate.bind({});

Basic.argTypes = {
}

Basic.args = {
}