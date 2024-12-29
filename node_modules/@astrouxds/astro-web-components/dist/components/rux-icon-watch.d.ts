import type { Components, JSX } from "../types/components";

interface RuxIconWatch extends Components.RuxIconWatch, HTMLElement {}
export const RuxIconWatch: {
  prototype: RuxIconWatch;
  new (): RuxIconWatch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
