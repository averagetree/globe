import type { Components, JSX } from "../types/components";

interface RuxOption extends Components.RuxOption, HTMLElement {}
export const RuxOption: {
  prototype: RuxOption;
  new (): RuxOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
