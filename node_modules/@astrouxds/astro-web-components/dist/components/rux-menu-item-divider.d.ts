import type { Components, JSX } from "../types/components";

interface RuxMenuItemDivider extends Components.RuxMenuItemDivider, HTMLElement {}
export const RuxMenuItemDivider: {
  prototype: RuxMenuItemDivider;
  new (): RuxMenuItemDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
