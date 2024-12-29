import type { Components, JSX } from "../types/components";

interface RuxIconAddBox extends Components.RuxIconAddBox, HTMLElement {}
export const RuxIconAddBox: {
  prototype: RuxIconAddBox;
  new (): RuxIconAddBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
