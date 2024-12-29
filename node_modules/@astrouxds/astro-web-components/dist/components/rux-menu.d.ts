import type { Components, JSX } from "../types/components";

interface RuxMenu extends Components.RuxMenu, HTMLElement {}
export const RuxMenu: {
  prototype: RuxMenu;
  new (): RuxMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
