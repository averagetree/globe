import type { Components, JSX } from "../types/components";

interface RuxButtonGroup extends Components.RuxButtonGroup, HTMLElement {}
export const RuxButtonGroup: {
  prototype: RuxButtonGroup;
  new (): RuxButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
