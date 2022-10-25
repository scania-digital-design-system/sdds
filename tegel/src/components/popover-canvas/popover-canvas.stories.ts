import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Popover-canvas',
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    canvasPosition: {
      name: 'Canvas position',
      description: 'Position of the PopoverCanvas',
      defaultValue: { summary: 'right-start' },
      type: { summary: 'string' },
      control: {
        type: 'radio',
        options: ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
      },
    },
  },
};

const ComponentPopoverCanvas = ({ ...Basic }) =>
  formatHtmlPreview(
    `
    <style>
      .demo-wrapper {
        display: flex;
        flex-wrap; nowrap;
        align-items: center;
      }
    </style>
  <div>
      <sdds-popover-canvas 
        placement="${Basic.canvasPosition}"
        selector="#trigger"> 
        <div>
          <h2>A popover canvas!</h2>
          <p>
            Where you can put anything you want!
          </p>
          <p>
            <a target="_blank" href="https://digitaldesign.scania.com">Even links!</a>
          </p>
        </div>
      </sdds-popover-canvas>
      <div class="demo-wrapper">
        <span style="user-select: none;margin-right: 16px;">Click icon for popover canvas</span>
        <div style="cursor: pointer; display: flex; align-items: center;" id="trigger">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM7 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" fill="#0D0F13"/>
          </svg>
        </div>
      </div>
      </div>
    `,
  );

export const Default = ComponentPopoverCanvas.bind({});
Default.args = {
  canvasPosition: 'right-start',
};
