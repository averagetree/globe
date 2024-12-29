import type { Components, JSX } from "../types/components";

interface RuxIconCollections extends Components.RuxIconCollections, HTMLElement {}
export const RuxIconCollections: {
  prototype: RuxIconCollections;
  new (): RuxIconCollections;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
