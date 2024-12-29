import type { Components, JSX } from "../types/components";

interface RuxIconSort extends Components.RuxIconSort, HTMLElement {}
export const RuxIconSort: {
  prototype: RuxIconSort;
  new (): RuxIconSort;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
