import type { Components, JSX } from "../types/components";

interface RuxIconPayment extends Components.RuxIconPayment, HTMLElement {}
export const RuxIconPayment: {
  prototype: RuxIconPayment;
  new (): RuxIconPayment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
