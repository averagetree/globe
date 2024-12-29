import type { Components, JSX } from "../types/components";

interface RuxIconFlare extends Components.RuxIconFlare, HTMLElement {}
export const RuxIconFlare: {
  prototype: RuxIconFlare;
  new (): RuxIconFlare;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
