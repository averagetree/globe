import type { Components, JSX } from "../types/components";

interface RuxIconTexture extends Components.RuxIconTexture, HTMLElement {}
export const RuxIconTexture: {
  prototype: RuxIconTexture;
  new (): RuxIconTexture;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
