import type { Components, JSX } from "../types/components";

interface RuxIconError extends Components.RuxIconError, HTMLElement {}
export const RuxIconError: {
  prototype: RuxIconError;
  new (): RuxIconError;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
