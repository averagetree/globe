import type { Components, JSX } from "../types/components";

interface RuxCheckbox extends Components.RuxCheckbox, HTMLElement {}
export const RuxCheckbox: {
  prototype: RuxCheckbox;
  new (): RuxCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
