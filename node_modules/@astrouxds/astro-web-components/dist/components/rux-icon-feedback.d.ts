import type { Components, JSX } from "../types/components";

interface RuxIconFeedback extends Components.RuxIconFeedback, HTMLElement {}
export const RuxIconFeedback: {
  prototype: RuxIconFeedback;
  new (): RuxIconFeedback;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
