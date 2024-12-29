import type { Components, JSX } from "../types/components";

interface RuxIconVisibility extends Components.RuxIconVisibility, HTMLElement {}
export const RuxIconVisibility: {
  prototype: RuxIconVisibility;
  new (): RuxIconVisibility;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
