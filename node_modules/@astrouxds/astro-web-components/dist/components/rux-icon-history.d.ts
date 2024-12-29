import type { Components, JSX } from "../types/components";

interface RuxIconHistory extends Components.RuxIconHistory, HTMLElement {}
export const RuxIconHistory: {
  prototype: RuxIconHistory;
  new (): RuxIconHistory;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
