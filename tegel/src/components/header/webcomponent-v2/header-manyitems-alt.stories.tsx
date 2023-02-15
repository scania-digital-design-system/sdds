import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/HeaderV2',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    dummyHtml: {
      name: 'Dummy content',
      description: 'Some html to try out in the main section.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
  args: {
    dummyHtml: `<p style="color:gainsboro">"I have seen the will of the deceased wife," said he. "To determine its exact meaning I have been obliged to work out the present prices of the investments with which it is concerned. The total income, which at the time of the wife's death was little short of 1100 pounds, is now, through the fall in agricultural prices, not more than 750 pounds. Each daughter can claim an income of 250 pounds, in case of marriage. It is evident, therefore, that if both girls had married, this beauty would have had a mere pittance, while even one of them would cripple him to a very serious extent. My morning's work has not been wasted, since it has proved that he has the very strongest motives for standing in the way of anything of the sort. And now, Watson, this is too serious for dawdling, especially as the old man is aware that we are interesting ourselves in his affairs; so if you are ready, we shall call a cab and drive to Waterloo. I should be very much obliged if you would slip your revolver into your pocket. An Eley's No. 2 is an excellent argument with gentlemen who can twist steel pokers into knots. That and a tooth-brush are, I think, all that we need."</p><p style="color:gainsboro">At Waterloo we were fortunate in catching a train for Leatherhead, where we hired a trap at the station inn and drove for four or five miles through the lovely Surrey lanes. It was a perfect day, with a bright sun and a few fleecy clouds in the heavens. The trees and wayside hedges were just throwing out their first green shoots, and the air was full of the pleasant smell of the moist earth. To me at least there was a strange contrast between the sweet promise of the spring and this sinister quest upon which we were engaged. My companion sat in the front of the trap, his arms folded, his hat pulled down over his eyes, and his chin sunk upon his breast, buried in the deepest thought. Suddenly, however, he started, tapped me on the shoulder, and pointed over the meadows.</p><p style="color:gainsboro">"Look there!" said he.</p><p style="color:gainsboro">A heavily timbered park stretched up in a gentle slope, thickening into a grove at the highest point. From amid the branches there jutted out the grey gables and high roof-tree of a very old mansion.</p><p style="color:gainsboro">"Stoke Moran?" said he.</p><p style="color:gainsboro">"Yes, sir, that be the house of Dr. Grimesby Roylott," remarked the driver.</p><p style="color:gainsboro">"There is some building going on there," said Holmes; "that is where we are going."</p><p style="color:gainsboro">"There's the village," said the driver, pointing to a cluster of roofs some distance to the left; "but if you want to get to the house, you'll find it shorter to get over this stile, and so by the foot-path over the fields. There it is, where the lady is walking."</p><p style="color:gainsboro">"And the lady, I fancy, is Miss Stoner," observed Holmes, shading his eyes. "Yes, I think we had better do as you suggest."</p><p style="color:gainsboro">We got off, paid our fare, and the trap rattled back on its way to Leatherhead.</p><p style="color:gainsboro">"I thought it as well," said Holmes as we climbed the stile, "that this fellow should think we had come here as architects, or on some definite business. It may stop his gossip. Good-afternoon, Miss Stoner. You see that we have been as good as our word."</p><p style="color:gainsboro">Our client of the morning had hurried forward to meet us with a face which spoke her joy. "I have been waiting so eagerly for you," she cried, shaking hands with us warmly. "All has turned out splendidly. Dr. Roylott has gone to town, and it is unlikely that he will be back before evening."</p><p style="color:gainsboro">"We have had the pleasure of making the doctor's acquaintance," said Holmes, and in a few words he sketched out what had occurred. Miss Stoner turned white to the lips as she listened.</p>`,
  },
};

const Template = ({ dummyHtml }) =>
  formatHtmlPreview(
    `
    <script>
      /* For demonstration purposes only. Don't do this at home. */
      window.demoSideMenu = document.querySelector('#demo-side-menu');
    </script>
    <style>
      :root {
        --app-bar-height: 64px;
        --side-menu-width: 272px;
      }
      /* Note: to make the layout fill the entire viewport height you'll need to set the */
      /* height of the parent element and all of its ancestors to 100%. */
      /* Please note that using 'vh' for this can cause issues on some mobile browsers. */
      .demo-layout {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }
      .demo-header {
        position: sticky;
        top: 0;
      }
      .demo-wrap-side-menu-and-main {
        display: flex;
        flex-grow: 1;
      }

      @media (min-width: 672px) {
        #demo-side-menu {
          height: calc(100vh - var(--app-bar-height));
          position: sticky;
          top: var(--app-bar-height);
          left: 0px;
        }
      }

      /* If an extra button in the header is required except on */
      /* very narrow screens, you can use classes like these: */
      .demo-hide {
        display: none;
      }

      @media (min-width: 375px) {
        .demo-xs-hide {
          display: none;
        }
        .demo-xs-show {
          display: block;
        }
      }
    </style>

  <div class="demo-layout">
    <sdds-header-v2 class="demo-header">
      <sdds-header-hamburger onclick="demoSideMenu.open = true;"></sdds-header-hamburger>

      <sdds-header-title>
        Example: Many items
      </sdds-header-title>

      <sdds-header-button-v2 slot="end" onclick="alert('clicked')">
        <sdds-icon name="calendar" size="20px"></sdds-icon>
      </sdds-header-button-v2>
      
      <sdds-header-dropdown-v2 slot="end" placement="end" no-dropdown-icon  class="demo-hide demo-xs-show">
        <img slot="button-icon" src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" alt="User menu."/>
        <sdds-header-dropdown-list-lg>
          <sdds-header-dropdown-list-lg-user
            heading="Name Nameson"
            subheading="Company name">
          </sdds-header-dropdown-list-lg-user>
          <sdds-header-dropdown-list-lg-link>
            Link here
          </sdds-header-dropdown-list-lg-link>
          <sdds-header-dropdown-list-lg-link>
            Link there
          </sdds-header-dropdown-list-lg-link>
        </sdds-header-dropdown-list-lg>
      </sdds-header-dropdown-v2>

      <sdds-header-launcher-v2 slot="end">
        <sdds-header-launcher-list-title>Good</sdds-header-launcher-list-title>
        <sdds-header-launcher-list>
          <sdds-header-launcher-list-link href="https://tegel.scania.com">Spider man</sdds-header-launcher-list-link>
          <sdds-header-launcher-list-link href="https://tegel.scania.com">Groot</sdds-header-launcher-list-link>
        </sdds-header-launcher-list>
        <sdds-header-launcher-list-title>Evil</sdds-header-launcher-list-title>
        <sdds-header-launcher-list>
          <sdds-header-launcher-list-link href="https://tegel.scania.com">Dr Octopus</sdds-header-launcher-list-link>
          <sdds-header-launcher-list-link href="https://tegel.scania.com">Apocalypse</sdds-header-launcher-list-link>
          <sdds-header-launcher-list-link href="https://tegel.scania.com">Scarlet Witch</sdds-header-launcher-list-link>
        </sdds-header-launcher-list>
      </sdds-header-launcher-v2>

      <sdds-header-logo slot="end" link-href="https://design.scania.com">
      </sdds-header-logo>

    </sdds-header-v2>

    <div class="demo-wrap-side-menu-and-main">
      <!-- Note: the "persistent" property keeps the menu open on desktop -->
      <sdds-side-menu-v2 id="demo-side-menu" persistent>
        <sdds-side-menu-overlay slot="overlay" onclick="demoSideMenu.open = false;"></sdds-side-menu-overlay>

        <sdds-side-menu-close-button slot="close-button" onclick="demoSideMenu.open = false;"></sdds-side-menu-close-button>

        <sdds-side-menu-button-v2>
          <sdds-icon slot="icon" name="timer" size="24"></sdds-icon>
          About us
        </sdds-side-menu-button-v2>

        <sdds-side-menu-button-v2>
          <sdds-icon slot="icon" name="truck" size="24"></sdds-icon>
          Trucks
        </sdds-side-menu-button-v2>

        <sdds-side-menu-button-v2>
          <sdds-icon slot="icon" name="wifi" size="24"></sdds-icon>
          Our services
        </sdds-side-menu-button-v2>

        <sdds-side-menu-dropdown-v2>
          <sdds-icon slot="button-icon" name="profile" size="24"></sdds-icon>
          <span slot="button-label">
            Drivers
          </span>
          <sdds-side-menu-dropdown-list>
            <sdds-side-menu-dropdown-list-link href="https://www.scania.com">Albin Larsson</sdds-side-menu-dropdown-list-link>
            <sdds-side-menu-dropdown-list-link href="https://www.scania.com ">Viktor Skofors</sdds-side-menu-dropdown-list-link>
          </sdds-side-menu-dropdown-list>
        </sdds-side-menu-dropdown-v2>

        <sdds-side-menu-button-v2>
          <sdds-icon slot="icon" name="star" size="24"></sdds-icon>
          Values
        </sdds-side-menu-button-v2>

        <sdds-side-menu-dropdown-v2 slot="end">
          <sdds-icon slot="button-icon" name="heart" size="24"></sdds-icon>
          <span slot="button-label">
            Drivers
          </span>
          <sdds-side-menu-dropdown-list>
            <sdds-side-menu-dropdown-list-link href="https://scania.com">Albin Larsson</sdds-side-menu-dropdown-list-link>
            <sdds-side-menu-dropdown-list-link href="https://scania.com">Viktor Skofors</sdds-side-menu-dropdown-list-link>
          </sdds-side-menu-dropdown-list>
        </sdds-side-menu-dropdown-v2>

        <sdds-side-menu-button-v2 slot="end">
          <sdds-icon slot="icon" name="star" size="24"></sdds-icon>
          Values
        </sdds-side-menu-button-v2>

        <sdds-side-menu-button-v2 slot="end" class="demo-xs-hide">
          <sdds-side-menu-user-v2 heading="Name Namesson" subheading="Company name">
            <img
              slot="image"
              src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
              alt="User menu."
            />
          </sdds-side-menu-user-v2>
        </sdds-side-menu-button-v2>

        <sdds-side-menu-collapse-button slot="sticky-end" onclick="demoSideMenu.collapsed = !demoSideMenu.collapsed;"></sdds-side-menu-collapse-button>

      </sdds-side-menu-v2>

      <main class="sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
        <p>If there are more than three buttons and/or links, they should be placed in a persistent side menu, which is always visible on large screens.</p>

        <p>Tip: Resize the window to see the side menu become a drawer.</p>

        ${dummyHtml}
      </main>
    </div>
  </div>
  `,
  );

export const ManyHeaderItemsAlt = Template.bind({});
