import type { Components, JSX } from "../types/components";

interface RuxCheckboxGroup extends Components.RuxCheckboxGroup, HTMLElement {}
export const RuxCheckboxGroup: {
  prototype: RuxCheckboxGroup;
  new (): RuxCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
