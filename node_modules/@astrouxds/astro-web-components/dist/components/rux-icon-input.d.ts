import type { Components, JSX } from "../types/components";

interface RuxIconInput extends Components.RuxIconInput, HTMLElement {}
export const RuxIconInput: {
  prototype: RuxIconInput;
  new (): RuxIconInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
