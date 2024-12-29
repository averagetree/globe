import type { Components, JSX } from "../types/components";

interface RuxIconCategory extends Components.RuxIconCategory, HTMLElement {}
export const RuxIconCategory: {
  prototype: RuxIconCategory;
  new (): RuxIconCategory;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
