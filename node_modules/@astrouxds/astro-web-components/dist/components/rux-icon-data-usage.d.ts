import type { Components, JSX } from "../types/components";

interface RuxIconDataUsage extends Components.RuxIconDataUsage, HTMLElement {}
export const RuxIconDataUsage: {
  prototype: RuxIconDataUsage;
  new (): RuxIconDataUsage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
