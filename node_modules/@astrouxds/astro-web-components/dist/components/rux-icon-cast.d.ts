import type { Components, JSX } from "../types/components";

interface RuxIconCast extends Components.RuxIconCast, HTMLElement {}
export const RuxIconCast: {
  prototype: RuxIconCast;
  new (): RuxIconCast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
