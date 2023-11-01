export default {
  title: 'Intro/Deprecation',
  parameters: {
    layout: 'fullscreen',
    showPanel: false,
  },
};

const DeprecationTemplate = () => `
  <section class="sdds-u-p3">
    <h1>Deprecation Notice</h1>

    <p><strong>SDDS and its packages have been deprecated and are no longer actively maintained.</strong></p>

    <p><strong>Why is it deprecated?</strong></p>
    <p>SDDS has reached the end of its development lifecycle, and we have decided to discontinue active support and updates for it. We recommend that you consider alternative solutions for your project to ensure ongoing compatibility, security, and stability.</p>

    <p><strong>Which are affected packages?</strong></p>
    <ul>
      <li>@scania/icons</li>
      <li>@scania/theme-light</li>
      <li>@scania/components</li>
      <li>@scania/grid</li>
      <li>@scania/colour</li>
      <li>@scania/tyography</li>
    </ul>

    <p><strong>Recommended Alternatives</strong></p>
    <p>We suggest exploring the Tegel Design System, which is the successor of SDDS and is actively maintained:</p>
    <ul>
        <li><a href="https://www.npmjs.com/package/@scania/tegel">@scania/tegel</a>: One package for the entire Tegel design system. Based on Web Components.</li>
        <li><a href="https://www.npmjs.com/package/@scania/tegel-react">@scania/tegel-react</a>: Version of @scania/tegel that provides React component wrappers.</li>
        <li><a href="https://www.npmjs.com/package/@scania/tegel-angular">@scania/tegel-angular</a>: Version of @scania/tegel that provides Angular component wrappers.</li>
    </ul>

    <p><strong>What should you do now?</strong></p>
    <ol>
        <li><strong>Migrate to an alternative package:</strong> We strongly encourage you to transition to one of the recommended alternatives mentioned above by following their documentation on npm, <a href="https://tegel.scania.com/development/migration">SDDS -> Tegel migration guide</a> and <a href="https://tegel.scania.com/development/getting-started-development/installation">Tegel installation guide</a> on official Tegel website.</li>
        <li><strong>Remove the deprecated package:</strong> You can safely remove this package from your project once you have successfully migrated to an alternative solution.</li>
    </ol>

    <p><strong>Thank You!</strong></p>
    <p>We appreciate your support and use of this package. If you have any questions or need further assistance with the deprecation process or migration, feel free to reach out to us by <a href="https://github.com/scania-digital-design-system/tegel/issues/new/choose">creating an issue</a> in our GitHub repository or contacting <a href="https://teams.microsoft.com/l/channel/19%3a5e33f67fe502441f914fbcdc6e2548f5%40thread.skype/Development%2520support?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac">Development support</a> channel in Teams.</p>

    <p>Again, thank you for being a part of our community, and we hope the recommended alternatives serve your needs effectively.</p>

    <p><em>Last Updated: October 23rd 2023</em></p>
</section>

  `;

export const Deprecation = DeprecationTemplate.bind({});
