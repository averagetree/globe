import type { Components, JSX } from "../types/components";

interface RuxIconLabel extends Components.RuxIconLabel, HTMLElement {}
export const RuxIconLabel: {
  prototype: RuxIconLabel;
  new (): RuxIconLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
