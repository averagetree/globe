import type { Components, JSX } from "../types/components";

interface RuxIconWaves extends Components.RuxIconWaves, HTMLElement {}
export const RuxIconWaves: {
  prototype: RuxIconWaves;
  new (): RuxIconWaves;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
