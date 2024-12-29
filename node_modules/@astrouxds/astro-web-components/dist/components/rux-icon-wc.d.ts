import type { Components, JSX } from "../types/components";

interface RuxIconWc extends Components.RuxIconWc, HTMLElement {}
export const RuxIconWc: {
  prototype: RuxIconWc;
  new (): RuxIconWc;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
