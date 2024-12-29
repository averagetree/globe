import type { Components, JSX } from "../types/components";

interface RuxTimeRegion extends Components.RuxTimeRegion, HTMLElement {}
export const RuxTimeRegion: {
  prototype: RuxTimeRegion;
  new (): RuxTimeRegion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
