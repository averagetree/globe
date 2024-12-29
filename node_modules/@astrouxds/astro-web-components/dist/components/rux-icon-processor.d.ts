import type { Components, JSX } from "../types/components";

interface RuxIconProcessor extends Components.RuxIconProcessor, HTMLElement {}
export const RuxIconProcessor: {
  prototype: RuxIconProcessor;
  new (): RuxIconProcessor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
