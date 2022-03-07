export default {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
};

const SpacingLayoutTemplate = () => `
  <style>
    .sdds-spacing-layout-demo-box {
      background-color: var(--sdds-blue-500);
      display: inline-block;
    }
    table th, table td {
      padding: 2rem;
    }
  </style>

  <h4>Spacing Layout</h4>
  <table>
    <tr>
      <th>Rem</th>
      <th>Px</th>
      <th>Token</th>
      <th>CSS</th>
      <th>Scale</th>
    </tr>
    <tr>
      <td>2rem</td>
      <td>8px</td>
      <td><code>$spacing-layout-8</code></td>
      <td><code>.sdds-spacing-layout-8</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-8); height: var(--sdds-spacing-layout-8)"></span></td>
    </tr>
    <tr>
      <td>4rem</td>
      <td>16px</td>
      <td><code>$spacing-layout-16</code></td>
      <td><code>.sdds-spacing-layout-16</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-16); height: var(--sdds-spacing-layout-16);"></span></td>
    </tr>
    <tr>
      <td>6rem</td>
      <td>24px</td>
      <td><code>$spacing-layout-24</code></td>
      <td><code>.sdds-spacing-layout-24</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-24); height: var(--sdds-spacing-layout-24);"></span></td>
    </tr>
    <tr>
      <td>8rem</td>
      <td>32px</td>
      <td><code>$spacing-layout-32</code></td>
      <td><code>.sdds-spacing-layout-32</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-32); height: var(--sdds-spacing-layout-32);"></span></td>
    </tr>
    <tr>
      <td>12rem</td>
      <td>48px</td>
      <td><code>$spacing-layout-48</code></td>
      <td><code>.sdds-spacing-layout-48</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-48); height: var(--sdds-spacing-layout-48);"></span></td>
    </tr>
    <tr>
      <td>16rem</td>
      <td>64px</td>
      <td><code>$spacing-layout-64</code></td>
      <td><code>.sdds-spacing-layout-64</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-64); height: var(--sdds-spacing-layout-64);"></span></td>
    </tr>
    <tr>
      <td>18rem</td>
      <td>72px</td>
      <td><code>$spacing-layout-72</code></td>
      <td><code>.sdds-spacing-layout-72</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-72); height: var(--sdds-spacing-layout-72);"></span></td>
    </tr>
    <tr>
      <td>24rem</td>
      <td>96px</td>
      <td><code>$spacing-layout-96</code></td>
      <td><code>.sdds-spacing-layout-96</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-96); height: var(--sdds-spacing-layout-96);"></span></td>
    </tr>
    <tr>
      <td>32rem</td>
      <td>128px</td>
      <td><code>$spacing-layout-128</code></td>
      <td><code>.sdds-spacing-layout-128</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-128); height: var(--sdds-spacing-layout-128);"></span></td>
    </tr>
    <tr>
      <td>40rem</td>
      <td>160px</td>
      <td><code>$spacing-layout-160</code></td>
      <td><code>.sdds-spacing-layout-160</code></td>
      <td><span class="sdds-spacing-layout-demo-box" style="width: var(--sdds-spacing-layout-160); height: var(--sdds-spacing-layout-160);"></span></td>
    </tr>
  </table>
  `;

const SpacingElementTemplate = () => `
  <style>
    .sdds-spacing-element-demo-box {
      background-color: var(--sdds-red-500);
      display: inline-block;
    }
    table th, table td {
      padding: 2rem;
    }s
  </style>
  <h4>Spacing Element</h4>
  <table>
    <tr>
      <th>Rem</th>
      <th>Px</th>
      <th>Token</th>
      <th>CSS</th>
      <th>Scale</th>
    </tr>
    <tr>
      <td>0.5rem</td>
      <td>2px</td>
      <td><code>$spacing-element-2</code></td>
      <td><code>.sdds-spacing-element-2</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-2); height: var(--sdds-spacing-element-2)"></span></td>
    </tr>
    <tr>
      <td>1rem</td>
      <td>4px</td>
      <td><code>$spacing-element-4</code></td>
      <td><code>.sdds-spacing-element-4</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-4); height: var(--sdds-spacing-element-4)"></span></td>
    </tr>
    <tr>
      <td>2rem</td>
      <td>8px</td>
      <td><code>$spacing-element-8</code></td>
      <td><code>.sdds-spacing-element-8</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-8); height: var(--sdds-spacing-element-8)"></span></td>
    </tr>
    <tr>
      <td>3rem</td>
      <td>12px</td>
      <td><code>$spacing-element-12</code></td>
      <td><code>.sdds-spacing-element-12</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-12); height: var(--sdds-spacing-element-12);"></span></td>
    </tr>
    <tr>
      <td>4rem</td>
      <td>16px</td>
      <td><code>$spacing-element-16</code></td>
      <td><code>.sdds-spacing-element-16</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-16); height: var(--sdds-spacing-element-16);"></span></td>
    </tr>
    <tr>
      <td>5rem</td>
      <td>20px</td>
      <td><code>$spacing-element-20</code></td>
      <td><code>.sdds-spacing-element-20</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-20); height: var(--sdds-spacing-element-20);"></span></td>
    </tr>
    <tr>
      <td>6rem</td>
      <td>24px</td>
      <td><code>$spacing-element-24</code></td>
      <td><code>.sdds-spacing-element-24</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-24); height: var(--sdds-spacing-element-24);"></span></td>
    </tr>
    <tr>
      <td>8rem</td>
      <td>32px</td>
      <td><code>$spacing-element-32</code></td>
      <td><code>.sdds-spacing-element-32</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-32); height: var(--sdds-spacing-element-32);"></span></td>
    </tr>
    <tr>
      <td>10rem</td>
      <td>40px</td>
      <td><code>$spacing-element-40</code></td>
      <td><code>.sdds-spacing-element-40</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-40); height: var(--sdds-spacing-element-40);"></span></td>
    </tr>
    <tr>
      <td>12rem</td>
      <td>48px</td>
      <td><code>$spacing-element-48</code></td>
      <td><code>.sdds-spacing-element-48</code></td>
      <td><span class="sdds-spacing-element-demo-box" style="width: var(--sdds-spacing-element-48); height: var(--sdds-spacing-element-48);"></span></td>
    </tr>
  </table>
  `;

export const SpacingLayout = SpacingLayoutTemplate.bind({});
SpacingLayout.args = {};

export const SpacingElement = SpacingElementTemplate.bind({});
SpacingElement.args = {};
