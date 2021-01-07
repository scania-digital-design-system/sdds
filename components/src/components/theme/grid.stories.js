export default {
  title: 'Foundation/Grid',
};

//Styling for grid templates
const style = `
  <style>
    body {
      padding: 0;
      margin: 0;
    }
    .sdds-container,
    .sdds-container-fluid {
      background-color: rgba(255, 0, 0, 0.5);
      color: black;
    }
    .sdds-row {
      background-color: white;
    }

    .outside {
      background-color: rgba(255, 0, 0, 0.1);
      height: 200px;
    }

    .inside {
      background-color: rgba(255, 0, 0, 0.1);
      max-height: 100%;
    }

    .auto-demo {
      height: 200px;
    }

    .sdds-sidebar {
      background-color: rgba(255, 0, 0, 0.1);
    }
  </style>`;

const GridTemplate = ({breakpoints,columnSize,columns, fluidContainer, noPadding, gutterless, offset, exampleInput}) => {
  return `
  ${style}
  <c-theme name="scania" global=""></c-theme>
  <h4>Grid</h4>
  <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'}">
    <div class="sdds-row">
      ${renderColumns(breakpoints, columnSize,columns, noPadding, gutterless, offset, exampleInput)}
    </div>
  </div>
  `
};

const GridPushTemplate = ({breakpoints, columnSize,columns, fluidContainer, noPadding, gutterless, offset, exampleInput}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <h4>Grid Push</h4>
  <div class="sdds-push">
    <div class="sdds-sidebar">
    </div>
    <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'}">
      <div class="sdds-row">
        ${renderColumns(breakpoints, columnSize,columns, noPadding, gutterless, offset,exampleInput)}
      </div>
    </div>
  </div>
  `
};

const offsetCol = `
<div class="outside">
  <div class="inside">.sdds-col-xxlg-2-offset</div>
  <div class="inside">.sdds-col-xlg-2-offset</div>
  <div class="inside">.sdds-col-lg-2-offset</div>
  <div class="inside">.sdds-col-md-2-offset</div>
  <div class="inside">.sdds-col-sm-2-offset</div>
</div>
`;

const GridOffsetTemplate = ({fluidContainer}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <h4>Grid Offset</h4>
    <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'}">
      <div class="sdds-row">
        <div class="sdds-col-xxlg-3 sdds-col-xxlg-2-offset sdds-col-xlg-3 sdds-col-xlg-2-offset sdds-col-lg-3 sdds-col-lg-2-offset sdds-col-md-2 sdds-col-md-2-offset-2 sdds-col-sm-2 sdds-col-sm-2-offset">
          ${offsetCol}
        </div>
        <div class="sdds-col-xxlg-3 sdds-col-xxlg-2-offset sdds-col-xlg-3 sdds-col-xlg-2-offset sdds-col-lg-3 sdds-col-lg-2-offset sdds-col-md-2 sdds-col-md-2-offset-2 sdds-col-sm-2 sdds-col-sm-2-offset">
          ${offsetCol}
        </div>
      </div>
      <div class="sdds-row">
        <div class="sdds-col-xxlg-3 sdds-col-xxlg-3-offset sdds-col-xlg-3 sdds-col-xlg-3-offset sdds-col-lg-3 sdds-col-lg-3-offset sdds-col-md-3 sdds-col-md-3-offset sdds-col-sm-3 sdds-col-sm-1-offset">
          <div class="outside">
            <div class="inside">.sdds-col-xxlg-3-offset</div>
            <div class="inside">.sdds-col-xlg-3-offset</div>
            <div class="inside">.sdds-col-lg-3-offset</div>
            <div class="inside">.sdds-col-md-3-offset</div>
            <div class="inside">.sdds-col-sm-1-offset</div>
          </div>
        </div>
      </div>
    </div>
  `
};

//Example columns for Auto column example
const autoColExample = `
<div class="sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md sdds-col-sm">
  <div class="outside auto-demo">
    <div class="inside">.sdds-col-xxlg</div>
    <div class="inside">.sdds-col-xlg</div>
    <div class="inside">.sdds-col-lg</div>
    <div class="inside">.sdds-col-md</div>
    <div class="inside">.sdds-col-sm</div>
  </div>
</div>
`

const GridAutoColTemplate = ({fluidContainer}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <h4>Grid Auto columns</h4>
  <h5>Container 1</h5>

  <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'}">
    <div class="sdds-row">
      ${autoColExample}
      ${autoColExample}
    </div>
  </div>

  <h5>Container 2</h5>
  <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'}">
    <div class="sdds-row">
      ${autoColExample}
      ${autoColExample}
      ${autoColExample}
    </div>
  </div>
  `
}

//Render columns inside examples
function renderColumns(breakpoints ,columnSize,columns, noPadding, gutterless,offset,exampleInput) {
  let columnRender = '';
  for(let i = 0; i < columns; i++) {
    columnRender += `<div class="${noPadding == true ? 'no-padding' : ''} ${gutterless == true ? 'gutterless' : ''} sdds-col-${breakpoints}-${columnSize} sdds-col-xlg-${offset}-offset">
    <div class="outside">
      <div class="inside">
      ${exampleInput}
      </div>
    </div>
  </div>`;
  }
  return columnRender;
}

//Grid default controls
const defaultOptions = {
  breakpoints: { control: {type: 'select', options: ['xxlg', 'xlg', 'lg', 'md', 'sm'] }, description: "Possible breakpoint options for columns", name: 'Breakpoints'},
  columnSize: { control: { type: 'range', min: 1, max: 16 }, description: "How much space one column should take", name: 'Column Size'},
  columns: { control: { type: 'range', min: 1, max: 16 }, description: "How many column should be added", name: 'Columns'},
  offset: {control: {type: 'range', min: 0, max: 15}, description: "Set offset on each column", name: 'Offset'},
  fluidContainer: {control: { type: 'boolean'}, description: "Set the container as fluid, set fullscreen", name: 'Fluid container'},
  gutterless: {control: { type: 'boolean'}, description: "Padding on each column", name: 'Gutterless'},
  noPadding: {control: { type: 'boolean'}, description: "Padding on each column",name: 'No padding'},
  exampleInput: {control: {type: 'text'}, description: "Here you can either add HTML or plain text that will be rendered in each column", name: 'Textfield'}
}

//Grid default values for control
const defaultOptionsValues = {
  breakpoints: 'xlg',
  columns: 16,
  columnSize:  1,
  offset: 0,
  fluidContainer: false,
  gutterless: false,
  noPadding: false,
  exampleInput: ''
}

//Different grids templates controls
export const Basic = GridTemplate.bind({});

Basic.argTypes = {
 ...defaultOptions
}

Basic.args = {
 ...defaultOptionsValues
}

export const Push = GridPushTemplate.bind({});

Push.argTypes = {
  ...defaultOptions,
}

Push.args = {
  ...defaultOptionsValues,
}

export const Offset = GridOffsetTemplate.bind({})

Offset.argTypes = {}
Offset.argTypes.fluidContainer = defaultOptions.fluidContainer

Offset.args = {
  fluidContainer: false
}

export const Auto = GridAutoColTemplate.bind({});

Auto.argTypes = {}
Auto.argTypes.fluidContainer = defaultOptions.fluidContainer

Auto.args = {
  fluidContainer: false
}
