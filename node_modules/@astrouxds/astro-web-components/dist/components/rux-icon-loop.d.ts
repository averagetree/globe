import type { Components, JSX } from "../types/components";

interface RuxIconLoop extends Components.RuxIconLoop, HTMLElement {}
export const RuxIconLoop: {
  prototype: RuxIconLoop;
  new (): RuxIconLoop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
