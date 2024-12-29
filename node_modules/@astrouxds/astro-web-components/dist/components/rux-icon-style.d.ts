import type { Components, JSX } from "../types/components";

interface RuxIconStyle extends Components.RuxIconStyle, HTMLElement {}
export const RuxIconStyle: {
  prototype: RuxIconStyle;
  new (): RuxIconStyle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
