export default {
  title: 'Component/Card',
  args: {
    headline: 'Header text',
    subheadline:'Subheader text',
    footer: '<c-icon style="font-size: 20px;" name="scania-arrow"></c-icon>',
    clickable: false
  }
};

import CardImage from '../../../.storybook/assets/image/card-img.png';
import CardImage2 from '../../../.storybook/assets/image/card-img-left.png';

const style =`<style>
.demo {
  margin: auto;
  margin-top: 50px;
}
</style>`;

const CardTemplate = ({headline,subheadline,footer,clickable,text,divider,imageTop,pictogram}) => {
  return `
  ${style}
    <sdds-theme></sdds-theme>

    <div class="sdds-container">
      <div class="sdds-row demo">

        <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">
          <sdds-card clickable="true">
            <div slot="sdds-card" class="sdds-card ${clickable ? 'sdds-clickable' : ''}">
              ${imageTop == true ? `<img class="sdds-card-img" src="${CardImage}" />` : ``}
              <div class="sdds-card-header">
                ${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ``}
                ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ``}
              </div>
              ${imageTop == false ? `<img class="sdds-card-img" src="${CardImage}" />` : ``}
              ${divider ? `<div class="sdds-divider-light-border-top"></div>` : ``}
              ${text ? `<div class="sdds-card-body">${text}</div>` : ``}
              ${footer ? `<div class="sdds-card-footer">${footer}</div>` :``}
            </div>
          </sdds-card>

        </div>
      </div>
    </div>
  `
};

export const Basic = CardTemplate.bind({});

Basic.argTypes = {}

Basic.args = {}


export const SupportText = CardTemplate.bind({});

SupportText.argTypes = {}

SupportText.args = {
text: 'This is a short and consist detail text describing for the user what this text is really about.'
}

export const Divider = CardTemplate.bind({});

Divider.argTypes = {}

Divider.args = {
 divider: true,
 text: 'This is a short and consist detail text describing for the user what this text is really about.'
}

export const link = CardTemplate.bind({});

link.argTypes = {}

link.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  footer: '<a href="#">Link text</a><a href="#">Link text</a>'
}

export const button = CardTemplate.bind({});

button.argTypes = {}

button.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  footer: '<button class="sdds-btn sdds-btn-sm sdds-btn-primary">Button text</button>'
}

export const Image = CardTemplate.bind({});

Image.argTypes = {}

Image.args = {
  divider: true,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  imageTop: true
}



const AvatarTemplate = ({headline,subheadline,footer,clickable,text,divider,imageTop,avatar}) => {
  return `
  ${style}
    <sdds-theme></sdds-theme>

    <div class="sdds-container">
      <div class="sdds-row demo">

        <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">
          <sdds-card clickable="true">
            <div slot="sdds-card" class="sdds-card ${clickable ? 'sdds-clickable' : ''}">
              ${imageTop == true ? `<img class="sdds-card-img" src="${CardImage}" />` : ``}
              <div class="sdds-card-header-avatar">
               ${avatar ? `<div class="sdds-card-avatar">${avatar}</div>` : ``}
                <div class="sdds-card-headlines">
                  ${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ``}
                  ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ``}
                </div>
              </div>
              ${imageTop == false ? `<img class="sdds-card-img" src="${CardImage}" />` : ``}
              ${divider ? `<div class="sdds-divider-light-border-top"></div>` : ``}
              ${text ? `<div class="sdds-card-body">${text}</div>` : ``}
              ${footer ? `<div class="sdds-card-footer">${footer}</div>` :``}
            </div>
          </sdds-card>

        </div>
      </div>
    </div>
  `
};

export const Avatar = AvatarTemplate.bind({});

Avatar.argTypes = {}

Avatar.args = {
  avatar: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E2E2E4"/></svg>`,
  divider: false,
  text: 'This is a short and consist detail text describing for the user what this text is really about.',
  imageTop: false
}

//FIXME: WIP card img-left
// const ImageLeftTemplate = ({headline,subheadline,footer,clickable,text,divider,imageTop,avatar}) => {
//   return `
//   ${style}
//     <sdds-theme></sdds-theme>

//     <div class="sdds-container">
//       <div class="sdds-row demo">

//         <div class="sdds-col-xxlg-9 sdds-col-xlg-9 sdds-col-lg-9 sdds-hide-md">
//           <sdds-card clickable="true">

//             <div slot="sdds-card" class="sdds-card sdds-card-img-left ${clickable ? 'sdds-clickable' : ''}">

//               <img class="sdds-card-img" src="${CardImage2}" />
//               <div class="sdds-card-img">
//                 <div class="sdds-card-header">
//                   ${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ``}
//                   ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ``}
//                 </div>
//                 ${divider ? `<div class="sdds-divider-light-border-top"></div>` : ``}
//                 ${text ? `<div class="sdds-card-body">${text}</div>` : ``}
//                 ${footer ? `<div class="sdds-card-footer">${footer}</div>` :``}
//               </div>
//             </div>
//           </sdds-card>

//         </div>
//       </div>
//     </div>
//   `
// };


// export const ImageLeft = ImageLeftTemplate.bind({});

// ImageLeft.argTypes = {}

// ImageLeft.args = {
//   headline: 'Scania Fleet Management Portal',
//   subheadline: 'Guidance',
//   divider: false,
//   text: 'Are you unsure of how to use Scania Fleet Management Portal in the right way? Watch our videos to find out.',
//   footer: '<button class="sdds-btn sdds-btn-sm sdds-btn-primary">Watch our e-learning</button>'
// }




