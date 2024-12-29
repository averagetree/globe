import type { Components, JSX } from "../types/components";

interface RuxIconCallReceived extends Components.RuxIconCallReceived, HTMLElement {}
export const RuxIconCallReceived: {
  prototype: RuxIconCallReceived;
  new (): RuxIconCallReceived;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
