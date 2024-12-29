import type { Components, JSX } from "../types/components";

interface RuxAccordion extends Components.RuxAccordion, HTMLElement {}
export const RuxAccordion: {
  prototype: RuxAccordion;
  new (): RuxAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
