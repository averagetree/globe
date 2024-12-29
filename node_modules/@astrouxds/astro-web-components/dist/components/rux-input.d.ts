import type { Components, JSX } from "../types/components";

interface RuxInput extends Components.RuxInput, HTMLElement {}
export const RuxInput: {
  prototype: RuxInput;
  new (): RuxInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
