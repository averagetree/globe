import type { Components, JSX } from "../types/components";

interface RuxIconLens extends Components.RuxIconLens, HTMLElement {}
export const RuxIconLens: {
  prototype: RuxIconLens;
  new (): RuxIconLens;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
