import type { Components, JSX } from "../types/components";

interface RuxIconAllInclusive extends Components.RuxIconAllInclusive, HTMLElement {}
export const RuxIconAllInclusive: {
  prototype: RuxIconAllInclusive;
  new (): RuxIconAllInclusive;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
