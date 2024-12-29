import type { Components, JSX } from "../types/components";

interface RuxIconTransform extends Components.RuxIconTransform, HTMLElement {}
export const RuxIconTransform: {
  prototype: RuxIconTransform;
  new (): RuxIconTransform;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
