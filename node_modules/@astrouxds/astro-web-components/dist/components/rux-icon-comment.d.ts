import type { Components, JSX } from "../types/components";

interface RuxIconComment extends Components.RuxIconComment, HTMLElement {}
export const RuxIconComment: {
  prototype: RuxIconComment;
  new (): RuxIconComment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
