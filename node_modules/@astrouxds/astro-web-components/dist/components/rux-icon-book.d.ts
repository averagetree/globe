import type { Components, JSX } from "../types/components";

interface RuxIconBook extends Components.RuxIconBook, HTMLElement {}
export const RuxIconBook: {
  prototype: RuxIconBook;
  new (): RuxIconBook;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
