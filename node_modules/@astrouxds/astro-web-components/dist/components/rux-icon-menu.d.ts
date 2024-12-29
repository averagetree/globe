import type { Components, JSX } from "../types/components";

interface RuxIconMenu extends Components.RuxIconMenu, HTMLElement {}
export const RuxIconMenu: {
  prototype: RuxIconMenu;
  new (): RuxIconMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
