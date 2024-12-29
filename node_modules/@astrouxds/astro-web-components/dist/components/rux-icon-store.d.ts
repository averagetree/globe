import type { Components, JSX } from "../types/components";

interface RuxIconStore extends Components.RuxIconStore, HTMLElement {}
export const RuxIconStore: {
  prototype: RuxIconStore;
  new (): RuxIconStore;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
