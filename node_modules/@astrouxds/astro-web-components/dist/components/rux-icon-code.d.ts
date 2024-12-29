import type { Components, JSX } from "../types/components";

interface RuxIconCode extends Components.RuxIconCode, HTMLElement {}
export const RuxIconCode: {
  prototype: RuxIconCode;
  new (): RuxIconCode;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
