import type { Components, JSX } from "../types/components";

interface RuxIconPalette extends Components.RuxIconPalette, HTMLElement {}
export const RuxIconPalette: {
  prototype: RuxIconPalette;
  new (): RuxIconPalette;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
