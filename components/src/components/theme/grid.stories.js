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
      background-color: #ff00009e;
      color: black;
      outline: 1px solid red;
    }

    .sdds-row > div {
      outline: 1px solid #ef1919;
      background: #fbc5c5;
      height: 50px;
    }

    .sdds-sidebar {
      background-color: rgba(255, 0, 0, 0.1);
    }

    .sdds-push .sdds-row > div {
      outline: 1px solid #ef1919;
      background: #fbc5c5;
      height: 100%;
    }

    .offset-demo .sdds-row > div {
      height: 100%
    }

    .auto-col-demo .sdds-row > div {
      height: 100%;
    }

    .demo-example-cols .sdds-row > div {
      height: 100px;
    }

    .demo-example-cols [class*=col] > div {
      background-color: #ff565642;
      height: 100%;
    }

    @media (max-width: 1055px) {
      .sdds-hide-md {
        display: none !important;
      }
    }

    @media (max-width: 671px) {
      .sdds-hide-sm {
        display: none !important;
      }
    }

    .sdds-hide-md, .sdds-hide-sm {
      display: block;
    }

  </style>`;

const GridTemplate = ({fluidContainer}) => {
  return `
  ${style}
  <c-theme name="scania" global=""></c-theme>
  <h4>Grid</h4>
  <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'}">

    <div class="sdds-row">
      <div class="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-hide-md">16</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-15 sdds-col-xlg-15 sdds-col-lg-15 sdds-hide-md">15</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md">1</div>
    </div>
    <div class="sdds-row">
      <div class="sdds-col-xxlg-14 sdds-col-xlg-14 sdds-col-lg-14 sdds-hide-md">14</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-hide-md">2</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-13 sdds-col-xlg-13 sdds-col-lg-13 sdds-hide-md">13</div>
      <div class="sdds-col-xxlg-3 sdds-col-xlg-3 sdds-col-lg-3 sdds-hide-md">3</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-12 sdds-col-xlg-12 sdds-col-lg-12 sdds-hide-md">12</div>
      <div class="sdds-col-xxlg-4 sdds-col-xlg-4 sdds-col-lg-4 sdds-hide-md">4</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-11 sdds-col-xlg-11 sdds-col-lg-11 sdds-hide-md">11</div>
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">5</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-10 sdds-col-xlg-10 sdds-col-lg-10 sdds-hide-md">10</div>
      <div class="sdds-col-xxlg-6 sdds-col-xlg-6 sdds-col-lg-6 sdds-hide-md">6</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-9 sdds-col-xlg-9 sdds-col-lg-9 sdds-hide-md">9</div>
      <div class="sdds-col-xxlg-7 sdds-col-xlg-7 sdds-col-lg-7 sdds-hide-md">7</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-8 sdds-hide-sm">8</div>
      <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-hide-md">8</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-7 sdds-col-xlg-7 sdds-col-lg-7 sdds-col-md-7 sdds-hide-sm">7</div>
      <div class="sdds-col-xxlg-7 sdds-col-xlg-7 sdds-col-lg-7 sdds-hide-md">7</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-hide-md">2</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-6 sdds-col-xlg-6 sdds-col-lg-6 sdds-col-md-6 sdds-hide-sm">6</div>
      <div class="sdds-col-xxlg-6 sdds-col-xlg-6 sdds-col-lg-6 sdds-hide-md">6</div>
      <div class="sdds-col-xxlg-4 sdds-col-xlg-4 sdds-col-lg-4 sdds-hide-md">4</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-col-md-5 sdds-hide-sm">5</div>
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">5</div>
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-hide-md">5</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md">1</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-4 sdds-col-xlg-4 sdds-col-lg-4 sdds-col-md-4 sdds-col-sm-4">4</div>
      <div class="sdds-col-xxlg-4 sdds-col-xlg-4 sdds-col-lg-4 sdds-col-md-4 sdds-col-sm-4 sdds-hide-sm">4</div>
      <div class="sdds-col-xxlg-4 sdds-col-xlg-4 sdds-col-lg-4 sdds-hide-md">4</div>
      <div class="sdds-col-xxlg-4 sdds-col-xlg-4 sdds-col-lg-4 sdds-hide-md">4</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-3 sdds-col-xlg-3 sdds-col-lg-3 sdds-col-md-3 sdds-col-sm-3">3</div>
      <div class="sdds-col-xxlg-3 sdds-col-xlg-3 sdds-col-lg-3 sdds-col-md-3 sdds-hide-sm">3</div>
      <div class="sdds-col-xxlg-3 sdds-col-xlg-3 sdds-col-lg-3 sdds-hide-md">3</div>
      <div class="sdds-col-xxlg-3 sdds-col-xlg-3 sdds-col-lg-3 sdds-hide-md">3</div>
      <div class="sdds-col-xxlg-3 sdds-col-xlg-3 sdds-col-lg-3 sdds-hide-md">3</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md">1</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-col-md-2 sdds-col-sm-2">2</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-col-md-2 sdds-col-sm-2">2</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-col-md-2 sdds-hide-sm">2</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-col-md-2 sdds-hide-sm">2</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-hide-md">2</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-hide-md">2</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-hide-md">2</div>
      <div class="sdds-col-xxlg-2 sdds-col-xlg-2 sdds-col-lg-2 sdds-hide-md">2</div>
    </div>

    <div class="sdds-row">
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-col-sm-1">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-col-sm-1">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-col-sm-1">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-col-sm-1">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-col-md-1 sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
      <div class="sdds-col-xxlg-1 sdds-col-xlg-1 sdds-col-lg-1 sdds-hide-md sdds-hide-sm">1</div>
    </div>
  </div>
  `
};

const GridPushTemplate = ({fluidContainer}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <h4>Grid Push</h4>
  <div class="sdds-push">
    <div class="sdds-sidebar">
    </div>
    <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'}">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-8 sdds-col-md-8 sdds-col-sm-4">
        <div>
        .sdds-col-xxlg-16
        </div>
        <div>
        .sdds-col-xlg-16
        </div>
        <div>
        .sdds-col-lg-8
        </div>
        <div>
        .sdds-col-md-8
        </div>
        <div>
        .sdds-col-sm-4
        </div>
      </div>
      <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-4 sdds-col-md-4 sdds-col-sm-2">
        <div>
        .sdds-col-xxlg-8
        </div>
        <div>
        .sdds-col-xlg-8
        </div>
        <div>
        .sdds-col-lg-4
        </div>
        <div>
        .sdds-col-md-4
        </div>
        <div>
        .sdds-col-sm-2
        </div>
      </div>
      <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-4 sdds-col-md-4 sdds-col-sm-2">
        <div>
        .sdds-col-xxlg-8
        </div>
        <div>
        .sdds-col-xlg-8
        </div>
        <div>
        .sdds-col-lg-4
        </div>
        <div>
        .sdds-col-md-4
        </div>
        <div>
        .sdds-col-sm-2
        </div>
      </div>
    </div>
  </div>
  </div>
  `
};

const GridOffsetTemplate = ({fluidContainer}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <h4>Grid Offset</h4>
    <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'} offset-demo">
      <div class="sdds-row">
        <div class="sdds-col-xxlg-3 sdds-col-xxlg-2-offset sdds-col-xlg-3 sdds-col-xlg-2-offset sdds-col-lg-3 sdds-col-lg-2-offset sdds-col-md-2 sdds-col-md-2-offset-2 sdds-col-sm-2 sdds-col-sm-2-offset">
          <div>.sdds-col-xxlg-2-offset</div>
          <div>.sdds-col-xlg-2-offset</div>
          <div>.sdds-col-lg-2-offset</div>
          <div>.sdds-col-md-2-offset</div>
          <div>.sdds-col-sm-2-offset</div>
        </div>
        <div class="sdds-col-xxlg-3 sdds-col-xxlg-2-offset sdds-col-xlg-3 sdds-col-xlg-2-offset sdds-col-lg-3 sdds-col-lg-2-offset sdds-col-md-2 sdds-col-md-2-offset-2 sdds-col-sm-2 sdds-col-sm-2-offset">
        <div>.sdds-col-xxlg-2-offset</div>
        <div>.sdds-col-xlg-2-offset</div>
        <div>.sdds-col-lg-2-offset</div>
        <div>.sdds-col-md-2-offset</div>
        <div>.sdds-col-sm-2-offset</div>
        </div>
      </div>
      <div class="sdds-row">
        <div class="sdds-col-xxlg-3 sdds-col-xxlg-3-offset sdds-col-xlg-3 sdds-col-xlg-3-offset sdds-col-lg-3 sdds-col-lg-3-offset sdds-col-md-3 sdds-col-md-3-offset sdds-col-sm-3 sdds-col-sm-1-offset">
          <div class="outside">
            <div>.sdds-col-xxlg-3-offset</div>
            <div>.sdds-col-xlg-3-offset</div>
            <div>.sdds-col-lg-3-offset</div>
            <div>.sdds-col-md-3-offset</div>
            <div>.sdds-col-sm-1-offset</div>
          </div>
        </div>
      </div>
    </div>
  `
};

const GridAutoColTemplate = ({fluidContainer}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <h4>Grid Auto columns</h4>
  <h5>Container 1</h5>

  <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'} auto-col-demo">
    <div class="sdds-row">
      <div class="sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md sdds-col-sm">
        <div>.sdds-col-xxlg</div>
        <div>.sdds-col-xlg</div>
        <div>.sdds-col-lg</div>
        <div>.sdds-col-md</div>
        <div>.sdds-col-sm</div>
      </div>
    </div>
  </div>

  <h5>Container 2</h5>
  <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'} auto-col-demo">
    <div class="sdds-row">
      <div class="sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md sdds-col-sm">
        <div>.sdds-col-xxlg</div>
        <div>.sdds-col-xlg</div>
        <div>.sdds-col-lg</div>
        <div>.sdds-col-md</div>
        <div>.sdds-col-sm</div>
      </div>
      <div class="sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md sdds-col-sm">
        <div>.sdds-col-xxlg</div>
        <div>.sdds-col-xlg</div>
        <div>.sdds-col-lg</div>
        <div>.sdds-col-md</div>
        <div>.sdds-col-sm</div>
      </div>
      <div class="sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md sdds-col-sm">
        <div>.sdds-col-xxlg</div>
        <div>.sdds-col-xlg</div>
        <div>.sdds-col-lg</div>
        <div>.sdds-col-md</div>
        <div>.sdds-col-sm</div>
      </div>
      <div class="sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md sdds-col-sm">
        <div>.sdds-col-xxlg</div>
        <div>.sdds-col-xlg</div>
        <div>.sdds-col-lg</div>
        <div>.sdds-col-md</div>
        <div>.sdds-col-sm</div>
      </div>
    </div>
  </div>
  `
}

const GridGutterless = ({fluidContainer}) => {
  return `
    ${style}
    <c-theme name="scania" global="true"></c-theme>
    <h4>Grid gutterless</h4>
    <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'} demo-example-cols">
      <div class="sdds-row">
        <div class="gutterless sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>.gutterless</div>
        </div>
        <div class="gutterless sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>.gutterless</div>
        </div>
        <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>gutter</div>
        </div>
        <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>gutter</div>
        </div>
      </div>
    </div>
  `
}

const GridNoPadding = ({fluidContainer}) => {
  return `
    ${style}
    <c-theme name="scania" global="true"></c-theme>
    <h4>Grid no-padding</h4>
    <div class="${fluidContainer == true ? 'sdds-container-fluid': 'sdds-container'} demo-example-cols">
      <div class="sdds-row">
        <div class="no-padding sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>.no-padding</div>
        </div>
        <div class="no-padding sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>.no-padding</div>
        </div>
        <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>With padding</div>
        </div>
        <div class="sdds-col-xxlg-8 sdds-col-xlg-8 sdds-col-lg-8 sdds-col-md-4 sdds-col-sm-2">
          <div>With padding</div>
        </div>
      </div>
    </div>
  `
}

const GridFluid = () => {
  return `
    ${style}
    <c-theme name="scania" global="true"></c-theme>
    <h4>Grid fluid</h4>
    <div class="sdds-container-fluid">
      <div class="sdds-row">
        <div class="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-2">sdds-container-fluid</div>
      </div>
    </div>

    <div class="sdds-container">
      <div class="sdds-row">
        <div class="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-2">sdds-container</div>
      </div>
    </div>
  `
}


//Grid default controls for all grid
const defaultOptions = {
  fluidContainer: {control: { type: 'boolean'}, description: "Set the container as fluid, set fullscreen", name: 'Fluid container'},
}

//Grid default values for control for all grid
const defaultOptionsValues = {
  fluidContainer: false,
}

//Controls for the grid
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

export const Gutterless = GridGutterless.bind({});

Gutterless.argTypes = {}
Gutterless.argTypes.fluidContainer = defaultOptions.fluidContainer

Gutterless.args = {
  fluidContainer: false
}

export const NoPadding = GridNoPadding.bind({});

NoPadding.argTypes = {}
NoPadding.argTypes.fluidContainer = defaultOptions.fluidContainer

NoPadding.args = {
  fluidContainer: false
}

export const Fluid = GridFluid.bind({});



