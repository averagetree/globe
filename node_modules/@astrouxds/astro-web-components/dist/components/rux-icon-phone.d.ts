import type { Components, JSX } from "../types/components";

interface RuxIconPhone extends Components.RuxIconPhone, HTMLElement {}
export const RuxIconPhone: {
  prototype: RuxIconPhone;
  new (): RuxIconPhone;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
