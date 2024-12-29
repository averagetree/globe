import type { Components, JSX } from "../types/components";

interface RuxIconLayers extends Components.RuxIconLayers, HTMLElement {}
export const RuxIconLayers: {
  prototype: RuxIconLayers;
  new (): RuxIconLayers;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
