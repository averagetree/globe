import type { Components, JSX } from "../types/components";

interface RuxIconClass extends Components.RuxIconClass, HTMLElement {}
export const RuxIconClass: {
  prototype: RuxIconClass;
  new (): RuxIconClass;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
