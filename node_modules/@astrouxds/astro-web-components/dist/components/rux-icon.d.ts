import type { Components, JSX } from "../types/components";

interface RuxIcon extends Components.RuxIcon, HTMLElement {}
export const RuxIcon: {
  prototype: RuxIcon;
  new (): RuxIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
