import type { Components, JSX } from "../types/components";

interface RuxAccordionItem extends Components.RuxAccordionItem, HTMLElement {}
export const RuxAccordionItem: {
  prototype: RuxAccordionItem;
  new (): RuxAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
