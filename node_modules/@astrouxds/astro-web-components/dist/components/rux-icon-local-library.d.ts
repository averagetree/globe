import type { Components, JSX } from "../types/components";

interface RuxIconLocalLibrary extends Components.RuxIconLocalLibrary, HTMLElement {}
export const RuxIconLocalLibrary: {
  prototype: RuxIconLocalLibrary;
  new (): RuxIconLocalLibrary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
