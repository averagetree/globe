import type { Components, JSX } from "../types/components";

interface RuxIconAccessible extends Components.RuxIconAccessible, HTMLElement {}
export const RuxIconAccessible: {
  prototype: RuxIconAccessible;
  new (): RuxIconAccessible;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
