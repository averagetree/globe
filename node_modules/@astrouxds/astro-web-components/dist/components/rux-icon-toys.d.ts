import type { Components, JSX } from "../types/components";

interface RuxIconToys extends Components.RuxIconToys, HTMLElement {}
export const RuxIconToys: {
  prototype: RuxIconToys;
  new (): RuxIconToys;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
