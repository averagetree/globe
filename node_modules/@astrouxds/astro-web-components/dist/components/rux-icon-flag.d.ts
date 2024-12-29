import type { Components, JSX } from "../types/components";

interface RuxIconFlag extends Components.RuxIconFlag, HTMLElement {}
export const RuxIconFlag: {
  prototype: RuxIconFlag;
  new (): RuxIconFlag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
