import type { Components, JSX } from "../types/components";

interface RuxIconAllOut extends Components.RuxIconAllOut, HTMLElement {}
export const RuxIconAllOut: {
  prototype: RuxIconAllOut;
  new (): RuxIconAllOut;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
