import type { Components, JSX } from "../types/components";

interface RuxTag extends Components.RuxTag, HTMLElement {}
export const RuxTag: {
  prototype: RuxTag;
  new (): RuxTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
