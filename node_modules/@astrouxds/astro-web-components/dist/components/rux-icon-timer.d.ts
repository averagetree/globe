import type { Components, JSX } from "../types/components";

interface RuxIconTimer extends Components.RuxIconTimer, HTMLElement {}
export const RuxIconTimer: {
  prototype: RuxIconTimer;
  new (): RuxIconTimer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
