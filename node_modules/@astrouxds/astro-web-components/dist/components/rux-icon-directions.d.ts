import type { Components, JSX } from "../types/components";

interface RuxIconDirections extends Components.RuxIconDirections, HTMLElement {}
export const RuxIconDirections: {
  prototype: RuxIconDirections;
  new (): RuxIconDirections;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
