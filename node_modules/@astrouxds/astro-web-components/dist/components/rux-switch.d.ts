import type { Components, JSX } from "../types/components";

interface RuxSwitch extends Components.RuxSwitch, HTMLElement {}
export const RuxSwitch: {
  prototype: RuxSwitch;
  new (): RuxSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
