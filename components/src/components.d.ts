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
    interface SddsAccordion {
        /**
          * Enable or disable divider lines between items
         */
        "divider": boolean;
    }
    interface SddsAccordionItem {
        /**
          * Icon can be placed after or before accordion header. Values accepted: `prefix` or `suffix` Default value is `suffix`
         */
        "affix": 'prefix' | 'suffix';
        /**
          * Disabled option in `boolean`.
         */
        "disabled": boolean;
        /**
          * Set to true to expand panel open
         */
        "expanded": boolean;
        /**
          * The header gives users the context about the additional information available inside the panel
         */
        "header": string;
        /**
          * When true 16px on right padding instead of 64px
         */
        "paddingReset": boolean;
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
}
export interface SddsAccordionItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSddsAccordionItemElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSddsAccordionElement extends Components.SddsAccordion, HTMLStencilElement {
    }
    var HTMLSddsAccordionElement: {
        prototype: HTMLSddsAccordionElement;
        new (): HTMLSddsAccordionElement;
    };
    interface HTMLSddsAccordionItemElement extends Components.SddsAccordionItem, HTMLStencilElement {
    }
    var HTMLSddsAccordionItemElement: {
        prototype: HTMLSddsAccordionItemElement;
        new (): HTMLSddsAccordionItemElement;
    };
    interface HTMLSddsBadgesElement extends Components.SddsBadges, HTMLStencilElement {
    }
    var HTMLSddsBadgesElement: {
        prototype: HTMLSddsBadgesElement;
        new (): HTMLSddsBadgesElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sdds-accordion": HTMLSddsAccordionElement;
        "sdds-accordion-item": HTMLSddsAccordionItemElement;
        "sdds-badges": HTMLSddsBadgesElement;
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
    interface SddsAccordion {
        /**
          * Enable or disable divider lines between items
         */
        "divider"?: boolean;
    }
    interface SddsAccordionItem {
        /**
          * Icon can be placed after or before accordion header. Values accepted: `prefix` or `suffix` Default value is `suffix`
         */
        "affix"?: 'prefix' | 'suffix';
        /**
          * Disabled option in `boolean`.
         */
        "disabled"?: boolean;
        /**
          * Set to true to expand panel open
         */
        "expanded"?: boolean;
        /**
          * The header gives users the context about the additional information available inside the panel
         */
        "header"?: string;
        /**
          * Fires after the accordion item is closed or opened, emitting the value (as boolean) of the current state of the accordion
         */
        "onAccordionItemToggle"?: (event: SddsAccordionItemCustomEvent<boolean>) => void;
        /**
          * When true 16px on right padding instead of 64px
         */
        "paddingReset"?: boolean;
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
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sdds-accordion": SddsAccordion;
        "sdds-accordion-item": SddsAccordionItem;
        "sdds-badges": SddsBadges;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sdds-accordion": LocalJSX.SddsAccordion & JSXBase.HTMLAttributes<HTMLSddsAccordionElement>;
            "sdds-accordion-item": LocalJSX.SddsAccordionItem & JSXBase.HTMLAttributes<HTMLSddsAccordionItemElement>;
            "sdds-badges": LocalJSX.SddsBadges & JSXBase.HTMLAttributes<HTMLSddsBadgesElement>;
        }
    }
}
