import type { Components, JSX } from "../types/components";

interface RuxGlobalStatusBar extends Components.RuxGlobalStatusBar, HTMLElement {}
export const RuxGlobalStatusBar: {
  prototype: RuxGlobalStatusBar;
  new (): RuxGlobalStatusBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
