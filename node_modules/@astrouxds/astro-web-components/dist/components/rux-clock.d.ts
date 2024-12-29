import type { Components, JSX } from "../types/components";

interface RuxClock extends Components.RuxClock, HTMLElement {}
export const RuxClock: {
  prototype: RuxClock;
  new (): RuxClock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
