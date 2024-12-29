import type { Components, JSX } from "../types/components";

interface RuxIconHighlight extends Components.RuxIconHighlight, HTMLElement {}
export const RuxIconHighlight: {
  prototype: RuxIconHighlight;
  new (): RuxIconHighlight;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
