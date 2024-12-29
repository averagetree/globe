import type { Components, JSX } from "../types/components";

interface RuxIconViewArray extends Components.RuxIconViewArray, HTMLElement {}
export const RuxIconViewArray: {
  prototype: RuxIconViewArray;
  new (): RuxIconViewArray;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
