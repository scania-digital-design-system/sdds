import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';
import { ComponentsFolder } from '../../utils/constants';

export default {
  title: ComponentsFolder,
  parameters: {
    layout: 'centered',
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=5903%3A245536&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=5903%3A245536&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    type: {
      name: 'Message type',
      description: 'Changes the type of message.',
      control: {
        type: 'radio',
      },
      options: ['Information', 'Success', 'Warning', 'Error'],
      table: {
        defaultValue: {
          summary: 'information',
        },
      },
    },
    header: {
      name: 'Header',
      description: 'Adds a header text.',
      control: {
        type: 'text',
      },
    },
    subheader: {
      name: 'Subheader',
      description: 'Adds a subheader text.',
      control: {
        type: 'text',
      },
    },
    link: {
      name: 'Link',
      description: 'Adds a CTA link.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    type: 'Information',
    header: 'Header',
    subheader: '',
    link: false,
  },
};

const Template = ({ type, header, subheader, link }) =>
  formatHtmlPreview(
    `<sdds-toast
        type="${type.toLowerCase()}"
        header="${header}"
    >
      ${
        subheader
          ? `
      <div  slot="toast-subheader">
        ${subheader}
      </div>
      `
          : ''
      }
       ${
         link
           ? `<a slot="toast-link" href="#">This is a link.</a>
       `
           : ''
       }
    </sdds-toast>
        <script>
        document.addEventListener('sddsClose', (event) => {
            console.log(event)
        })
    </script>
  `,
  );
export const Toast = Template.bind({});
