import type { Components, JSX } from "../types/components";

interface RuxIconNavigation extends Components.RuxIconNavigation, HTMLElement {}
export const RuxIconNavigation: {
  prototype: RuxIconNavigation;
  new (): RuxIconNavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
