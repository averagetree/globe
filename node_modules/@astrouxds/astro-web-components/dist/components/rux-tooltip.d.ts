import type { Components, JSX } from "../types/components";

interface RuxTooltip extends Components.RuxTooltip, HTMLElement {}
export const RuxTooltip: {
  prototype: RuxTooltip;
  new (): RuxTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
