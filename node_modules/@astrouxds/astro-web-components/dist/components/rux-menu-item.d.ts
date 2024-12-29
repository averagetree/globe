import type { Components, JSX } from "../types/components";

interface RuxMenuItem extends Components.RuxMenuItem, HTMLElement {}
export const RuxMenuItem: {
  prototype: RuxMenuItem;
  new (): RuxMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
