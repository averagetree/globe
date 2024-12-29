import type { Components, JSX } from "../types/components";

interface RuxIconLooks extends Components.RuxIconLooks, HTMLElement {}
export const RuxIconLooks: {
  prototype: RuxIconLooks;
  new (): RuxIconLooks;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
