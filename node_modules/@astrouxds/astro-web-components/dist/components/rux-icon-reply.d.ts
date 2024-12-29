import type { Components, JSX } from "../types/components";

interface RuxIconReply extends Components.RuxIconReply, HTMLElement {}
export const RuxIconReply: {
  prototype: RuxIconReply;
  new (): RuxIconReply;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
