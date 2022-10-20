/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SddsBadges {
        /**
          * !!Deprecated!! Use size prop instead. Changes badge from default to small size
         */
        "isSmall": boolean;
        /**
          * Changes visibility of badge
         */
        "isVisible": boolean;
        /**
          * Component is available in size default and small (small dot). Default size is default
         */
        "size": 'default' | 'sm';
        /**
          * Value shown in badge
         */
        "value": string;
    }
    interface SddsModal {
        /**
          * Sticky or Static Actions
         */
        "actions": 'sticky' | 'static';
        "openModal": () => Promise<void>;
        /**
          * Disables closing modal on clicking on overlay area.
         */
        "prevent": boolean;
        /**
          * Target selector that triggers opening of modal, for example button with id="btn1", then selector is "#btn1"
         */
        "selector": string;
        /**
          * Size of modal. Accepted strings are: xs, sm, md, lg.
         */
        "size": 'xs' | 'sm' | 'md' | 'lg';
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSddsBadgesElement extends Components.SddsBadges, HTMLStencilElement {
    }
    var HTMLSddsBadgesElement: {
        prototype: HTMLSddsBadgesElement;
        new (): HTMLSddsBadgesElement;
    };
    interface HTMLSddsModalElement extends Components.SddsModal, HTMLStencilElement {
    }
    var HTMLSddsModalElement: {
        prototype: HTMLSddsModalElement;
        new (): HTMLSddsModalElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sdds-badges": HTMLSddsBadgesElement;
        "sdds-modal": HTMLSddsModalElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SddsBadges {
        /**
          * !!Deprecated!! Use size prop instead. Changes badge from default to small size
         */
        "isSmall"?: boolean;
        /**
          * Changes visibility of badge
         */
        "isVisible"?: boolean;
        /**
          * Component is available in size default and small (small dot). Default size is default
         */
        "size"?: 'default' | 'sm';
        /**
          * Value shown in badge
         */
        "value"?: string;
    }
    interface SddsModal {
        /**
          * Sticky or Static Actions
         */
        "actions"?: 'sticky' | 'static';
        /**
          * Disables closing modal on clicking on overlay area.
         */
        "prevent"?: boolean;
        /**
          * Target selector that triggers opening of modal, for example button with id="btn1", then selector is "#btn1"
         */
        "selector"?: string;
        /**
          * Size of modal. Accepted strings are: xs, sm, md, lg.
         */
        "size"?: 'xs' | 'sm' | 'md' | 'lg';
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sdds-badges": SddsBadges;
        "sdds-modal": SddsModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sdds-badges": LocalJSX.SddsBadges & JSXBase.HTMLAttributes<HTMLSddsBadgesElement>;
            "sdds-modal": LocalJSX.SddsModal & JSXBase.HTMLAttributes<HTMLSddsModalElement>;
        }
    }
}
