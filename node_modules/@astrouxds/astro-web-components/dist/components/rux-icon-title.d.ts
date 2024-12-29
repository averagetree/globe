import type { Components, JSX } from "../types/components";

interface RuxIconTitle extends Components.RuxIconTitle, HTMLElement {}
export const RuxIconTitle: {
  prototype: RuxIconTitle;
  new (): RuxIconTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
