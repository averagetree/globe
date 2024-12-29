import type { Components, JSX } from "../types/components";

interface RuxSlider extends Components.RuxSlider, HTMLElement {}
export const RuxSlider: {
  prototype: RuxSlider;
  new (): RuxSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
