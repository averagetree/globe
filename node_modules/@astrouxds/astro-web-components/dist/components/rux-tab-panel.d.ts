import type { Components, JSX } from "../types/components";

interface RuxTabPanel extends Components.RuxTabPanel, HTMLElement {}
export const RuxTabPanel: {
  prototype: RuxTabPanel;
  new (): RuxTabPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
