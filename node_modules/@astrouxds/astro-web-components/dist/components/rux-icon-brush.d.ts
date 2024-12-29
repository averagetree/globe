import type { Components, JSX } from "../types/components";

interface RuxIconBrush extends Components.RuxIconBrush, HTMLElement {}
export const RuxIconBrush: {
  prototype: RuxIconBrush;
  new (): RuxIconBrush;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
