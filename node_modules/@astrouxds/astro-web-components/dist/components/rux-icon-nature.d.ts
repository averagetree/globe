import type { Components, JSX } from "../types/components";

interface RuxIconNature extends Components.RuxIconNature, HTMLElement {}
export const RuxIconNature: {
  prototype: RuxIconNature;
  new (): RuxIconNature;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
