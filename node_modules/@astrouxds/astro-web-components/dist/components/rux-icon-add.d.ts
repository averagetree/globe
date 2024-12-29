import type { Components, JSX } from "../types/components";

interface RuxIconAdd extends Components.RuxIconAdd, HTMLElement {}
export const RuxIconAdd: {
  prototype: RuxIconAdd;
  new (): RuxIconAdd;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
