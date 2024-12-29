import type { Components, JSX } from "../types/components";

interface RuxPushButton extends Components.RuxPushButton, HTMLElement {}
export const RuxPushButton: {
  prototype: RuxPushButton;
  new (): RuxPushButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
