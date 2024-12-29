import type { Components, JSX } from "../types/components";

interface RuxIconCheck extends Components.RuxIconCheck, HTMLElement {}
export const RuxIconCheck: {
  prototype: RuxIconCheck;
  new (): RuxIconCheck;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
