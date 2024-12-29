import type { Components, JSX } from "../types/components";

interface RuxIconQueue extends Components.RuxIconQueue, HTMLElement {}
export const RuxIconQueue: {
  prototype: RuxIconQueue;
  new (): RuxIconQueue;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
