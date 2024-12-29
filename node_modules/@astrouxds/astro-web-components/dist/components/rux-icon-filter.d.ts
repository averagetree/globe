import type { Components, JSX } from "../types/components";

interface RuxIconFilter extends Components.RuxIconFilter, HTMLElement {}
export const RuxIconFilter: {
  prototype: RuxIconFilter;
  new (): RuxIconFilter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
