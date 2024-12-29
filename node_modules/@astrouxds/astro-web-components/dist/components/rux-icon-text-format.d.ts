import type { Components, JSX } from "../types/components";

interface RuxIconTextFormat extends Components.RuxIconTextFormat, HTMLElement {}
export const RuxIconTextFormat: {
  prototype: RuxIconTextFormat;
  new (): RuxIconTextFormat;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
