import type { Components, JSX } from "../types/components";

interface RuxIconViewStream extends Components.RuxIconViewStream, HTMLElement {}
export const RuxIconViewStream: {
  prototype: RuxIconViewStream;
  new (): RuxIconViewStream;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
