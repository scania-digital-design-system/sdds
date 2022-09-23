export default {
  title: 'Component/Block',
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['onwhite', 'ongrey'],
        label: {
          onwhite: 'On white',
          ongrey: 'On grey',
          ongrey958: 'On grey-958',
          ongrey900: 'On grey-900',
        },
      },
    },
  },
};

const style = `
<style>
  .sdds-demo-block-onwhite { background-color: var(--sdds-white); }
  .sdds-demo-block-grey { background-color: var(--sdds-grey-50); }
  .sdds-demo-block-ongrey958 { background-color: var(--sdds-grey-958); color: #fff; }
  .sdds-demo-block-ongrey900 { background-color: var(--sdds-grey-900); color: #fff; }
  .sdds-demo-block { padding: 30px; height: 100vh; }
</style>`;

const Template = (args) => `
    ${style}

    <div class="sdds-demo-block sdds-demo-block-${args.type}">
      <div class="sdds-block sdds-block__${args.type}">
        <p>Content be here...</p>
        <div class="sdds-block">
          <p>Content be here...</p>
        </div>
      </div>
    </div>

    `;

export const OnWhite = Template.bind({});

OnWhite.args = {
  type: 'onwhite',
};

export const OnGrey = Template.bind({});

OnGrey.args = {
  type: 'ongrey',
};
