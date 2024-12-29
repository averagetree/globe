import type { Components, JSX } from "../types/components";

interface RuxSelect extends Components.RuxSelect, HTMLElement {}
export const RuxSelect: {
  prototype: RuxSelect;
  new (): RuxSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
