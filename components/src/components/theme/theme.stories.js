import readme from './readme.md';

export default {
  title: 'Foundation/Typography',
  parameters: {
    notes: readme,
  },
};

const Template = ({content}) => {
  return `
  <c-theme name="scania"></c-theme>
  
  ${content}
  `
};

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
  `
}

export const Body = Template.bind({});
Body.args = {
  content: `
  <p class='sdds-body-01'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p class='sdds-body-02'>
  Nulla at volutpat diam ut venenatis. Nullam ac tortor vitae purus faucibus ornare. Mauris nunc congue nisi vitae suscipit tellus mauris. 
  </p>
  `
}

export const Paragraph = Template.bind({});
Paragraph.args = {
  content: `
  <p class='sdds-paragraph-01'>Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Dui nunc mattis enim ut tellus elementum sagittis vitae. </p>
  <p class='sdds-paragraph-02'>Sapien pellentesque habitant morbi tristique senectus et netus et. Ut tellus elementum sagittis vitae et. Scelerisque varius morbi enim nunc faucibus. Volutpat diam ut venenatis tellus in.</p>
  `
}

export const Detail = Template.bind({});
Detail.args =  {
  content: `
  <p class='sdds-detail-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-02'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-03'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-04'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-05'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p class='sdds-detail-06'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  `
}

export const ExpressiveHeadline = Template.bind({});
ExpressiveHeadline.args = {
  content: `
  <p class='sdds-expressive-headline-01'>Headline</p>
  <p class='sdds-expressive-headline-02'>Headline</p>
  `
}

export const TextField = Template.bind({});
TextField.args = {
  content: `
  <style>
    .text-field {
      width: 208px;
      height: 48px;
    background: #F6F6F7;
    border-radius: 4px;
    padding: 10px 16px;
    }
    .text-field p, p {margin:0;}
    .label, .helper {
      font-family: 'Scania Sans Semi Condensed', Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 10px;
      color: #82848A;
    }
    .helper {
      font-size: 12px;
      line-height: 16px;
      color: #696A70;
      margin-top:8px;
    }
    .box {
      width: 332px;
      height: 300px;
      padding: 126px 62px;
      background: #fff;
      display: block;
      float: left;
      margin-right: 16px;
    }
    .wrapper {
      background: #e5e5e5;
      width: 100%;
      min-height: 500px;
      padding: 50px;
      height:100%;
    }
    .label.out {
      font-size: 12px;
      line-height: 16px;
      color: #696A70;
    }
    .label.out.two {
      color: #515257;
      font-weight: 600;
    }
    .text-field.in {
      padding: 16px;
      margin-top:8px;
      color: #696A70;
    }
    .box.in {
      padding-top: 100px;
    }
  </style>
  <div class='wrapper'>
    <div class='box'>
      <div class='text-field'>
      <p class='label'>Label text</p>
      <p class='sdd-detail-02'>Text</p>
      </div>
      <p class='helper'>Helper text</p>  
    </div>

    <div class='box in'>
      
      <p class='label out'>Label</p>
      <div class='text-field in'>
      <p class='sdd-detail-02'>Placeholder text</p>
      </div>
      <p class='helper'>Helper text</p>  
    </div>

    <div class='box in'>
      <p class='label out two'>Label</p>
      <div class='text-field in'>
      <p class='sdd-detail-02'>Placeholder text</p>
      </div>
      <p class='helper'>Helper text</p>  
    </div>

  </div>
  
    
  
  
  `
}