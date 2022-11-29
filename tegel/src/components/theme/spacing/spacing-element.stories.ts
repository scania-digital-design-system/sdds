import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () =>
  formatHtmlPreview(
    `
  <style>
    .sdds-spacing-element-demo-box {
      background-color: var(--sdds-red-500);
      display: inline-block;
    }
    table th, table td {
      padding: 2rem;
      text-align: center;
    }

    th:last-child {
        text-align: left;
    }
    th:last-child,
    td:last-child {
      text-align: left;
    }
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
  `,
  );

export const SpacingElement = Template.bind({});
SpacingElement.args = {};
