import type { Components, JSX } from "../types/components";

interface RuxIconStorage extends Components.RuxIconStorage, HTMLElement {}
export const RuxIconStorage: {
  prototype: RuxIconStorage;
  new (): RuxIconStorage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
