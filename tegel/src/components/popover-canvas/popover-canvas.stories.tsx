import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Popover Canvas',
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    canvasPosition: {
      name: 'Canvas position',
      description: 'Position of the PopoverCanvas',
      type: { summary: 'string' },
      control: {
        type: 'select',
      },
      options: [
        'Bottom',
        'Bottom start',
        'Bottom end',
        'Top',
        'Top start',
        'Top end',
        'Left',
        'Left-start',
        'Left end',
        'Right',
        'Right start',
        'Right end',
      ],
    },
  },
  args: {
    canvasPosition: 'Bottom',
  },
};

const ComponentPopoverCanvas = ({ canvasPosition }) => {
  const canvasPosLookup = {
    'Bottom': 'bottom',
    'Bottom start': 'bottom-start',
    'Bottom end': 'bottom-end',
    'Top': 'top',
    'Top start': 'top-start',
    'Top end': 'top-end',
    'Left': 'left',
    'Left star': 'left-start',
    'Left end': 'left-end',
    'Right': 'right',
    'Right start': 'right-start',
    'Right end': 'right-end',
  };

  return formatHtmlPreview(
    `
      <style>
        /* demo-wrapper and demo-styles is for demonstration purposes only */
        .demo-wrapper {
          display: flex;
          flex-wrap; nowrap;
          align-items: center;
        }
      </style>

      <sdds-popover-canvas
        placement="${canvasPosLookup[canvasPosition]}"
        selector="#trigger">
        <div>
          <h2>A popover canvas!</h2>
          <p>
            Where you can put anything you want!
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">Even links!</a>
          </p>
        </div>
      </sdds-popover-canvas>

      <!-- demo-wrapper code below is for demonstration purposes only -->
      <div class="demo-wrapper">
        <span class="sdds-u-mr2">Click icon for popover canvas</span>
        
        <sdds-button aria-label="menu" onlyIcon id="trigger" type="ghost" size="sm">
          <sdds-icon slot="icon" class="sdds-btn-icon" size="16px" name="kebab"></sdds-icon>
        </sdds-button>
      </div>
    `,
  );
};
export const Default = ComponentPopoverCanvas.bind({});
Default.args = {};