import type { Components, JSX } from "../types/components";

interface RuxIconGrain extends Components.RuxIconGrain, HTMLElement {}
export const RuxIconGrain: {
  prototype: RuxIconGrain;
  new (): RuxIconGrain;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
