import type { Components, JSX } from "../types/components";

interface RuxIconTimeline extends Components.RuxIconTimeline, HTMLElement {}
export const RuxIconTimeline: {
  prototype: RuxIconTimeline;
  new (): RuxIconTimeline;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
