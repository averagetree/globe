import type { Components, JSX } from "../types/components";

interface RuxIconCached extends Components.RuxIconCached, HTMLElement {}
export const RuxIconCached: {
  prototype: RuxIconCached;
  new (): RuxIconCached;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
