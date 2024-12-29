import type { Components, JSX } from "../types/components";

interface RuxIconGesture extends Components.RuxIconGesture, HTMLElement {}
export const RuxIconGesture: {
  prototype: RuxIconGesture;
  new (): RuxIconGesture;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
