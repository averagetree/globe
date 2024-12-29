import type { Components, JSX } from "../types/components";

interface RuxTimeline extends Components.RuxTimeline, HTMLElement {}
export const RuxTimeline: {
  prototype: RuxTimeline;
  new (): RuxTimeline;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
