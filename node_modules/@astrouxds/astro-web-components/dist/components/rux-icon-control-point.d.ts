import type { Components, JSX } from "../types/components";

interface RuxIconControlPoint extends Components.RuxIconControlPoint, HTMLElement {}
export const RuxIconControlPoint: {
  prototype: RuxIconControlPoint;
  new (): RuxIconControlPoint;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
