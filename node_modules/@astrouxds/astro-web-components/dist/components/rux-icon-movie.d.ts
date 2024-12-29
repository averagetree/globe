import type { Components, JSX } from "../types/components";

interface RuxIconMovie extends Components.RuxIconMovie, HTMLElement {}
export const RuxIconMovie: {
  prototype: RuxIconMovie;
  new (): RuxIconMovie;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
