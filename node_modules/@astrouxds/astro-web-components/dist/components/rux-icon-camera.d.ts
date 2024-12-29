import type { Components, JSX } from "../types/components";

interface RuxIconCamera extends Components.RuxIconCamera, HTMLElement {}
export const RuxIconCamera: {
  prototype: RuxIconCamera;
  new (): RuxIconCamera;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
