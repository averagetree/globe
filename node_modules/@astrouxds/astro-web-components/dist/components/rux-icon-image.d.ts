import type { Components, JSX } from "../types/components";

interface RuxIconImage extends Components.RuxIconImage, HTMLElement {}
export const RuxIconImage: {
  prototype: RuxIconImage;
  new (): RuxIconImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
