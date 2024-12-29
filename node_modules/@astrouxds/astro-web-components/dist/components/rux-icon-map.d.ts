import type { Components, JSX } from "../types/components";

interface RuxIconMap extends Components.RuxIconMap, HTMLElement {}
export const RuxIconMap: {
  prototype: RuxIconMap;
  new (): RuxIconMap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
