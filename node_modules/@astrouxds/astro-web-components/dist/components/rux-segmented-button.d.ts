import type { Components, JSX } from "../types/components";

interface RuxSegmentedButton extends Components.RuxSegmentedButton, HTMLElement {}
export const RuxSegmentedButton: {
  prototype: RuxSegmentedButton;
  new (): RuxSegmentedButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
