export default {
  title: 'Component/Container',
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['onwhite', 'ongrey', 'ongrey958', 'ongrey900'],
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
  .sdds-demo-containerbox-onwhite { background-color: var(--sdds-white); }
  .sdds-demo-containerbox-grey { background-color: var(--sdds-grey); }
  .sdds-demo-containerbox-ongrey958 { background-color: var(--sdds-grey-958); color: #fff; }
  .sdds-demo-containerbox-ongrey900 { background-color: var(--sdds-grey-900); color: #fff; }
  .sdds-demo-containerbox { padding: 30px; height: 100vh; }
</style>`;

const Template = (args) => `
    ${style}

    <div class="sdds-demo-containerbox sdds-demo-containerbox-${args.type}">
      <div class="sdds-containerbox sdds-containerbox__${args.type}">
        <p>Content be here...</p>
        <div class="sdds-containerbox">
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
