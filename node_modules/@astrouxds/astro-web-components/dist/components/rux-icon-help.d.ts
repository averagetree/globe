import type { Components, JSX } from "../types/components";

interface RuxIconHelp extends Components.RuxIconHelp, HTMLElement {}
export const RuxIconHelp: {
  prototype: RuxIconHelp;
  new (): RuxIconHelp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
