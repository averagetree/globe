import type { Components, JSX } from "../types/components";

interface RuxIconExposure extends Components.RuxIconExposure, HTMLElement {}
export const RuxIconExposure: {
  prototype: RuxIconExposure;
  new (): RuxIconExposure;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
