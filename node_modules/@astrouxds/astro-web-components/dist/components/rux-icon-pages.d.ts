import type { Components, JSX } from "../types/components";

interface RuxIconPages extends Components.RuxIconPages, HTMLElement {}
export const RuxIconPages: {
  prototype: RuxIconPages;
  new (): RuxIconPages;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
