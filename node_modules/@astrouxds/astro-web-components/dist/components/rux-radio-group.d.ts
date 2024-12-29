import type { Components, JSX } from "../types/components";

interface RuxRadioGroup extends Components.RuxRadioGroup, HTMLElement {}
export const RuxRadioGroup: {
  prototype: RuxRadioGroup;
  new (): RuxRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
