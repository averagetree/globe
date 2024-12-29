import type { Components, JSX } from "../types/components";

interface RuxOptionGroup extends Components.RuxOptionGroup, HTMLElement {}
export const RuxOptionGroup: {
  prototype: RuxOptionGroup;
  new (): RuxOptionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
