import type { Components, JSX } from "../types/components";

interface RuxIconReceipt extends Components.RuxIconReceipt, HTMLElement {}
export const RuxIconReceipt: {
  prototype: RuxIconReceipt;
  new (): RuxIconReceipt;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
