import type { Components, JSX } from "../types/components";

interface RuxTabPanels extends Components.RuxTabPanels, HTMLElement {}
export const RuxTabPanels: {
  prototype: RuxTabPanels;
  new (): RuxTabPanels;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
