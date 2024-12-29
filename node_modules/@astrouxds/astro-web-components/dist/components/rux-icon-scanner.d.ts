import type { Components, JSX } from "../types/components";

interface RuxIconScanner extends Components.RuxIconScanner, HTMLElement {}
export const RuxIconScanner: {
  prototype: RuxIconScanner;
  new (): RuxIconScanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
