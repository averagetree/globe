import type { Components, JSX } from "../types/components";

interface RuxIconViewCarousel extends Components.RuxIconViewCarousel, HTMLElement {}
export const RuxIconViewCarousel: {
  prototype: RuxIconViewCarousel;
  new (): RuxIconViewCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
