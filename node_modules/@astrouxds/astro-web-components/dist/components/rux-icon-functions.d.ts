import type { Components, JSX } from "../types/components";

interface RuxIconFunctions extends Components.RuxIconFunctions, HTMLElement {}
export const RuxIconFunctions: {
  prototype: RuxIconFunctions;
  new (): RuxIconFunctions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
