import type { Components, JSX } from "../types/components";

interface RuxIconCall extends Components.RuxIconCall, HTMLElement {}
export const RuxIconCall: {
  prototype: RuxIconCall;
  new (): RuxIconCall;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
