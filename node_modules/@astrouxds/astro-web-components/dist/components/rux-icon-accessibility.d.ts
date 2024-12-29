import type { Components, JSX } from "../types/components";

interface RuxIconAccessibility extends Components.RuxIconAccessibility, HTMLElement {}
export const RuxIconAccessibility: {
  prototype: RuxIconAccessibility;
  new (): RuxIconAccessibility;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
